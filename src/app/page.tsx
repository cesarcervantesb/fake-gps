import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  const browserLocales = acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim().split("-")[0].toLowerCase());

  for (const bl of browserLocales) {
    if (routing.locales.includes(bl as typeof routing.locales[number])) {
      redirect(`/${bl}`);
    }
  }

  redirect(`/${routing.defaultLocale}`);
}
