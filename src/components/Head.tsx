import { useLocale, useTranslations } from "next-intl";
import NextHead from "next/head";
import { usePathname } from "next/navigation";

export default function Head() {
  const t = useTranslations();
  const locale = useLocale();
  const path = usePathname();
  return (
    <NextHead>
      <link
        rel="canonical"
        href={`https://www.rushsoft.de${
          path.startsWith(`/${locale}`) ? path : `/${locale}${path}`
        }`}
      />
      <title>{t("pageTitle")}</title>
      <meta
        name="description"
        content={t("pageDescription")}
        key="description"
      />
      <meta
        name="author"
        content="Jochen Probst - Web Application Development"
      />
      <meta
        name="publisher"
        content="Jochen Probst - Web Application Development"
      />
    </NextHead>
  );
}
