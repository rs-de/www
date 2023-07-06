import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import { useTranslations } from "next-intl";
import Head from "@/components/Head";
import Typography from "@/components/Typography";
import NextHead from "next/head";

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
        <p>Angaben gemäß § 5 TMG</p>
        <h2>Kontakt</h2>
        <p>
          Jochen Probst
          <br />
          Hölderlinstr. 38
          <br />
          72108 Rottenburg am Neckar
          <br />
          Telefon: +49 151 20783455
          <br />
          E-Mail: <a href="mailto:contact@rushsoft.de">contact@rushsoft.de</a>
          <br />
        </p>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          DE361183565
        </p>
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 1 RStV:</h2>
        <p>siehe oben (Kontakt)</p>
        <h2>Haftungsausschluss</h2>
        <h3>Inhalte</h3>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
          jedoch keine Gewähr übernommen werden. Diensteanbieter sind gemäß § 7
          Abs.1 TMG für eigene Inhalte auf deren Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
          oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
          jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        <h3>Links</h3>
        <p>
          Dieses Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb kann für diese fremden
          Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend
          entfernt.
        </p>
        <h2>Datenschutz</h2>
        <p>
          Die Nutzung dieser Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf diesen Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen.
          <br />
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
