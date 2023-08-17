## Warum ich beschlossen habe, den Schalter "Dark -/Light Theme" aus meinen Webanwendungen zu entfernen

Ich mag es sehr, wenn eine Website oder Webanwendung ein dunkles Theme unterstützt. Und ich denke
dass es wichtig ist, es zu unterstützen. Ob es wichtig ist oder nicht, ist eine andere Diskussion.
um uns zu konzentrieren, nehmen wir an, dass wir es unterstützen wollen.

### Wie funktioniert der Dark-Mode in einer Webapplikation?

Da das Styling einer Webanwendung mit CSS erfolgt, hier ein einfaches Beispiel:

```css
/* beispiel css */
body {
  background-color: weiß;
  color: black; /* text color */
}

/* ↑↑↑ Farbeinstellungen oben: "default" (oder "light mode") ↑↑↑↑ */
@media (bevorzugt-farbschema: dunkel) {
  /* ↓↓↓ Überschreiben der Standard-Farbeinstellungen für den "dunklen Modus" ↓↓↓ */
  body {
    background-color: schwarz;
    farbe: weiß;
  }
}
```

Zunächst gibt es die "Standard"-Einstellungen und dann, basierend auf einer Medienabfrage, einen CSS-Block, der die Standardeinstellungen (meist Farben) für den "dunklen Modus" überschreibt.
Die CSS-Medienabfrage "prefers-color-scheme" wird heute von allen Browsern unterstützt und kann [gefahrlos] verwendet werden (https://caniuse.com/?search=prefers-color-scheme). Sie wird auch von allen wichtigen Betriebssystemen unterstützt (Windows, macOS, iOS, Android, Linux, ...).

Das war's, der dunkle Modus ist fertig. (Wie üblich gibt es Sonderfälle zu beachten, z. B. Bilder mit Transparenz)

### Die Implementierung eines Umschalters macht alles kompliziert

Da wir diese Toggles überall finden können, scheint es üblich zu sein, also fügen wir einen hinzu.
Auf den ersten Blick scheint es einfach zu sein, zum Beispiel könnte eine Single Page Application (SPA) einfach einen lokalen booleschen Status verwenden, um den Toggle zu implementieren.
Aber was ist, wenn der Benutzer die Seite neu lädt? Der Zustand ist weg. Ok, kein Problem ... fügen wir ein lokales Speicherflag hinzu. fertig ... oder nicht?
Leider gibt es ein Problem, wenn der Benutzer die Seite das erste Mal lädt (oder beim Neuladen der Seite): es gibt ein kurzes Flackern (von weißem zu schwarzem Hintergrund)! Die Seite wird mit dem Standard-Theme geladen, und nach dem Laden der Seite wird das Theme per Javascript auf der Grundlage des lokalen Speichers auf die vom Benutzer bevorzugten Einstellungen umgestellt. Das ist kein gutes Benutzererlebnis. Auch wenn dieses Problem gelöst ist, gibt es noch einen Sonderfall: Wenn eine Seite auf dem Server gerendert wird, weiß der Server nicht über die Einstellung beim Neuladen bei der allerersten Anfrage Bescheid, aber, kein Problem ... wir können ein Cookie verwenden! ... hm, Gott sei Dank gibt es ein paar Pakete, mit denen das leicht zu integrieren ist :-). Ah, ich vergaß ... wir müssen die Cookie-Einstellungen in unseren Datenschutzrichtlinien anpassen, das wissen wir ... dieser herrliche Dialog erscheint überall und zwingt uns zu sagen "Ja, es ist ok, das Cookie zu verwenden".

### Warum fügen wir also ein Kippschalter hinzu?

Ich habe über den Grund nachgedacht, warum ich die Schaltfläche hinzugefügt habe, und mir sind zwei Dinge eingefallen:

1. Als _Entwickler_ möchte ich den dunklen Modus auf meiner Website testen und in der Lage sein, umzuschalten
2. Es könnte Bugs geben, bei denen der Darkmode versagt, etwas auf der Seite nicht "sichtbar" ist und der Benutzer sich abmüht: Aber der Benutzer könnte froh sein, einen Schalter zu haben? Vielleicht auch nicht: Es ist sehr wahrscheinlich, dass der Nutzer diesen "Workaround" nicht kennt oder die Umschaltmöglichkeit nicht findet.

Im Fall 1) können wir die Entwicklungswerkzeuge des Browsers verwenden, um den dunklen Modus zu aktivieren (oder zwischen dunkel und hell zu wechseln). Ich brauche also keinen Button dafür in der App. Hier die Devtools von Chrome:

![dev tools theme toggle](/img/blog/devtools-darkmode.webp)

Im Fall 2) müssen wir nur den Fehler beheben, wie üblich.

#### Aber es gibt noch etwas anderes, warum wir denken, dass wir einen "Fallback" brauchen

In der Entwicklung könnte es nicht so einfach sein, den Darkmode "überall" zu unterstützen. Zum Beispiel müssen wir in Tailwind manuell einen "dark:"-Modifikator zu jeder Klasse hinzufügen, die wir überschreiben müssen, um den Darkmode zu unterstützen. Wir müssen also aufpassen, dass wir das nicht vergessen. Aber wir werden einen vergessen (weil wir es können).

```
// Rückenwind-Beispiel für ein div zum Gestalten
<div class="bg-white dark:bg-slate-800 [...]

```

Es ist wirklich leicht, einige "dark:"-Einstellungen zu vergessen! Da Tailwind so flexibel ist (oder CSS), habe ich eine Lösung gefunden, um dieses Problem zu lösen:
[radix-ui/colors](https://www.radix-ui.com/colors).  
Wenn radix-ui/colors installiert ist (es gibt Tailwind-Plugins), würde das obige Beispiel wie folgt aussehen:

```
<div class="bg-slate-2 [...]
```

Nur eine Einstellung und der Darkmode wird von Haus aus unterstützt. (Mit ein wenig Aufwand zum Erlernen der 12 Farbskalen von radix-ui/colors)

#### Wie sieht es mit der Downloadgröße der css-Datei(en) aus?

Ich habe von einigen Beschwerden gelesen, dass es sich "falsch" anfühlt, die dunklen Einstellungen statisch zum CSS hinzuzufügen, selbst wenn es nicht nötig wäre.
Ich denke, wir müssen damit leben und uns einfach an den Standard halten (so lange wie möglich): CSS ist statisch vordefiniert, wird einmal im Voraus geladen (und zwischengespeichert) und eine http-GET-Anfrage sollte zustandslos sein. Wenn es richtig gemacht wird, ist es wirklich nicht viel von CSS.

### Was ist mit den Nutzern?

Es ist sehr wahrscheinlich, dass es die meisten Benutzer nicht interessiert!
Benutzer, die den dunklen Modus bevorzugen, werden ihn in ihrem Betriebssystem aktiviert haben, und Benutzern, die den hellen Modus bevorzugen, ist das völlig egal, weil er die Standardeinstellung ist.  
Die beste Schaltfläche ist vielleicht die, die wir nicht brauchen.

### Schlussfolgerung

Aus diesen Gründen habe ich mich entschlossen, den Toggle von der Seite zu entfernen, und das war auch gut so:

- "Workaround"-Code kann entfernt werden
- kein Cookie und/oder lokaler Speichereintrag mehr
- kein "Flicker"-Problem (googeln Sie nach "theme flicker on page load" und Sie werden eine Menge Artikel über dieses Problem finden).

Es funktioniert einfach. Ohne eine Umschalttaste.
