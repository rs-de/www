import { useTranslations } from "next-intl";
import NextHead from "next/head";

export default function Head() {
  const t = useTranslations();
  return (
    <NextHead>
      <title>{t("pageTitle")}</title>
      <meta
        name="description"
        content={t("pageDescription")}
        key="description"
      />
    </NextHead>
  );
}
