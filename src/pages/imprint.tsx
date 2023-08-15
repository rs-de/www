import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import { useTranslations } from "next-intl";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import NextHead from "next/head";
import { A } from "@/components/A";

export default function PageImprint() {
  const t = useTranslations();
  return (
    <>
      <Head />
      <NextHead>
        <meta
          name="description"
          content={t("pageImpressumDescription")}
          key="description"
        />
      </NextHead>
      <Typography>
        <h1>Impressum</h1>
        <p>
          Jochen Probst
          <br />
          Rushsoft
          <br />
          Hölderlinstr. 38
          <br />
          72108 Ergenzingen
        </p>
        <p>
          Tel.: +49 151 20783455
          <br />
          E-Mail: contact@rushsoft.de
          <br />
        </p>
        <p>Umsatzsteuer-Identifikationsnummer: DE361183565</p>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
          <A href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</A>
        </p>
        <p>
          Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </Typography>
    </>
  );
}

export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
