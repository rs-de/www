import Typography from "@/components/Typography";
import Link from "next/link";

export default function Privacy() {
  return (
    <Typography>
      <h1>Datenschutz</h1>
      <h2>Verantwortlicher</h2>
      <p>
        Siehe <Link href="/imprint">Impressum</Link>
      </p>
      <h2>Personenbezogene Daten</h2>
      <p>
        Die Nutzung dieser Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf diesen Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies explizit auf freiwilliger
        Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
        Dritte weitergegeben. <br />
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
        angeforderter Werbung und Informationsmaterialien wird hiermit
        ausdrücklich widersprochen.
        <br />
      </p>
      <h2>Zugriffsdaten und Logfiles</h2>
      <p>
        Der Zugriff auf diese Webseite wird in Form von so genannten
        Serverlogfiles protokolliert. Zu den Serverlogfiles können die Adresse
        und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des
        Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf,
        Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL
        (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der
        anfragende Provider gehören. Die Serverlogfiles können zum einen zu
        Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der
        Server zu vermeiden (insbesondere im Fall von missbräuchlichen
        Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung
        der Server und ihre Stabilität sicherzustellen.
      </p>
      <h2>Cookies</h2>
      <p>Diese Webseite verwendet keine Cookies.</p>
      <h2>Externe Ressourcen</h2>
      <p>
        Es sind keine externen Ressourcen z. B. Bilder, Videos oder Fonts auf
        dieser Webseite eingebettet.
      </p>
      <h2>Links</h2>
      <p>
        Dieses Angebot enthält Links zu externen Webseiten Dritter, für deren
        Inhalte keine Gewähr übernommen werden kann. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden derartige Links umgehend entfernt.
      </p>
    </Typography>
  );
}
