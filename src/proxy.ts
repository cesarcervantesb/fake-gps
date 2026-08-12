import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { hasLocale } from "next-intl";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// Top-level pages that can be requested without a locale prefix
// (they will be prefixed with the negotiated locale, e.g. /privacy -> /en/privacy)
const TOP_LEVEL_PAGES = new Set(["privacy"]);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] || "";

  if (firstSegment && !hasLocale(routing.locales, firstSegment)) {
    const isTopLevelPage = TOP_LEVEL_PAGES.has(firstSegment);

    if (!isTopLevelPage) {
      // Unsupported language -> redirect to the default locale home
      return NextResponse.redirect(
        new URL(`/${routing.defaultLocale}`, request.url)
      );
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
