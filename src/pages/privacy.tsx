import Typography from "@/components/Typography";
import { getMessages } from "@/i18n/getMessages";
import { NextPageContext } from "next";
import Link from "next/link";

export default function Privacy() {
  return (
    <Typography>
      <h1>Datenschutzerkl&auml;rung</h1>

      <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>

      <p>
        <b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website besuchen und
        bedanken uns f&uuml;r Ihr Interesse. Im Folgenden informieren wir Sie
        &uuml;ber den Umgang mit Ihren personenbezogenen Daten bei der Nutzung
        unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit
        denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
      </p>

      <p>
        <b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf
        dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
        Jochen Probst, Rushsoft, H&ouml;lderlinstr. 38, 72108 Ergenzingen,
        Deutschland, Tel.: +49 151 20783455, E-Mail: contact@rushsoft.de. Der
        f&uuml;r die Verarbeitung von personenbezogenen Daten Verantwortliche
        ist diejenige nat&uuml;rliche oder juristische Person, die allein oder
        gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung
        von personenbezogenen Daten entscheidet.
      </p>

      <h2>2) Datenerfassung beim Besuch unserer Website</h2>

      <p>
        <b>2.1</b>&nbsp;Bei der blo&szlig; informatorischen Nutzung unserer
        Website, also wenn Sie sich nicht registrieren oder uns anderweitig
        Informationen &uuml;bermitteln, erheben wir nur solche Daten, die Ihr
        Browser an den Seitenserver &uuml;bermittelt (sog.
        &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere Website aufrufen,
        erheben wir die folgenden Daten, die f&uuml;r uns technisch erforderlich
        sind, um Ihnen die Website anzuzeigen:
      </p>

      <ul>
        <li>Unsere besuchte Website</li>
        <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
        <li>Menge der gesendeten Daten in Byte</li>
        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
        <li>Verwendeter Browser</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
      </ul>

      <p>
        Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf
        Basis unseres berechtigten Interesses an der Verbesserung der
        Stabilit&auml;t und Funktionalit&auml;t unserer Website. Eine Weitergabe
        oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten
        uns allerdings vor, die Server-Logfiles nachtr&auml;glich zu
        &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine
        rechtswidrige Nutzung hinweisen.
      </p>

      <p>
        <b>2.2</b>&nbsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum
        Schutz der &Uuml;bertragung personenbezogener Daten und anderer
        vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
        Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie
        k&ouml;nnen eine verschl&uuml;sselte Verbindung an der Zeichenfolge
        &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer Browserzeile
        erkennen.
      </p>

      <h2>3) Kontaktaufnahme</h2>

      <p>
        Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
        E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle der
        Nutzung eines Kontaktformulars erhoben werden, ist aus dem jeweiligen
        Kontaktformular ersichtlich. Diese Daten werden ausschlie&szlig;lich zum
        Zweck der Beantwortung Ihres Anliegens bzw. f&uuml;r die Kontaktaufnahme
        und die damit verbundene technische Administration gespeichert und
        verwendet.
      </p>

      <p>
        Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist unser
        berechtigtes Interesse an der Beantwortung Ihres Anliegens
        gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung
        auf den Abschluss eines Vertrages ab, so ist zus&auml;tzliche
        Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
        Ihre Daten werden nach abschlie&szlig;ender Bearbeitung Ihrer Anfrage
        gel&ouml;scht. Dies ist der Fall, wenn sich aus den Umst&auml;nden
        entnehmen l&auml;sst, dass der betroffene Sachverhalt abschlie&szlig;end
        gekl&auml;rt ist und sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <h2>4) Datenverarbeitung zur Abwicklung von Spenden</h2>

      <p>
        F&uuml;r die Abwicklung von Spenden, die Sie uns ggf. zukommen lassen,
        verarbeiten wir in der Regel folgende personenbezogene Daten: Vor- und
        Zuname, Adresse, E-Mail-Adresse.
      </p>

      <p>
        Ihre Daten werden zusammen mit den Angaben zu Spendenh&ouml;he,
        Spendenrhythmus und Spendenzweck von uns gespeichert und zehn Jahre
        aufbewahrt.
      </p>

      <p>
        Je nach ausgew&auml;hlter Zahlungsweise werden die oben genannten Daten
        auch an den von Ihnen f&uuml;r die Spende ausgew&auml;hlten
        Zahlungsdienstleister weitergeleitet und dort ausschlie&szlig;lich und
        nur soweit erforderlich zur Abwicklung Ihrer Spende verarbeitet.
      </p>

      <p>
        Die oben genannten Verarbeitungen erfolgen auf Grundlage von Art. 6 Abs.
        1 lit. b DSGVO und dienen ausschlie&szlig;lich dazu, Ihre Spendenzahlung
        ordnungsgem&auml;&szlig; durchzuf&uuml;hren und buchhalterisch zu
        erfassen. Die Speicherung &uuml;ber einen Zeitraum von 10 Jahren hinweg
        fu&szlig;t auf Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit &sect; 147
        AO, nach welchem wir einer entsprechenden Aufbewahrungspflicht &uuml;ber
        den Gesch&auml;ftsvorgang unterliegen.
      </p>

      <h2>5) Rechte des Betroffenen</h2>

      <p>
        <b>5.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen
        gegen&uuml;ber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer
        personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts-
        und Interventionsrechte), wobei f&uuml;r die jeweiligen
        Aus&uuml;bungsvoraussetzungen auf die angef&uuml;hrte Rechtsgrundlage
        verwiesen wird:
      </p>

      <ul>
        <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
        <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;</li>
        <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;</li>
        <li>
          Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18
          DSGVO;
        </li>
        <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;</li>
        <li>
          Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO;
        </li>
        <li>
          Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7
          Abs. 3 DSGVO;
        </li>
        <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.</li>
      </ul>

      <p>
        <b>5.2</b>&nbsp;WIDERSPRUCHSRECHT
      </p>

      <p>
        WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN
        DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES
        VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE
        SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
        WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.
      </p>

      <p>
        MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
        VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER
        VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R
        DIE VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN,
        GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER WENN DIE
        VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
        RECHTSANSPR&Uuml;CHEN DIENT.
      </p>

      <p>
        WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
        DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
        GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
        ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH
        WIE OBEN BESCHRIEBEN AUS&Uuml;BEN.
      </p>

      <p>
        MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
        VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
      </p>

      <h2>6) Dauer der Speicherung personenbezogener Daten</h2>

      <p>
        Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
        anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und &ndash;
        sofern einschl&auml;gig &ndash; zus&auml;tzlich anhand der jeweiligen
        gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
        Aufbewahrungsfristen).
      </p>

      <p>
        Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
        ausdr&uuml;cklichen Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a
        DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre
        Einwilligung widerrufen.
      </p>

      <p>
        Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten, die im
        Rahmen rechtsgesch&auml;ftlicher bzw. rechtsgesch&auml;fts&auml;hnlicher
        Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        verarbeitet werden, werden diese Daten nach Ablauf der
        Aufbewahrungsfristen routinem&auml;&szlig;ig gel&ouml;scht, sofern sie
        nicht mehr zur Vertragserf&uuml;llung oder Vertragsanbahnung
        erforderlich sind und/oder unsererseits kein berechtigtes Interesse an
        der Weiterspeicherung fortbesteht.
      </p>

      <p>
        Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art.
        6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie
        Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei
        denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r
        die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
        &uuml;berwiegen, oder die Verarbeitung dient der Geltendmachung,
        Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen.
      </p>

      <p>
        Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
        Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese
        Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21
        Abs. 2 DSGVO aus&uuml;ben.
      </p>

      <p>
        Sofern sich aus den sonstigen Informationen dieser Erkl&auml;rung
        &uuml;ber spezifische Verarbeitungssituationen nichts anderes ergibt,
        werden gespeicherte personenbezogene Daten im &Uuml;brigen dann
        gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die sie erhoben
        oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
      </p>
    </Typography>
  );
}

export const getStaticProps = async (context: NextPageContext) => ({
  props: {
    messages: await getMessages(context),
  },
});
