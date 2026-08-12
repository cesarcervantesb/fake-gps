import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ThemeProvider from "@/components/ThemeProvider";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/images/favicon.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ThemeProvider locale={locale}>{children}</ThemeProvider>;
}
