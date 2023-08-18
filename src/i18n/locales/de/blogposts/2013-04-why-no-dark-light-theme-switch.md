## Warum ich beschlossen habe, den Schalter "Dark -/Light Theme" aus meinen Webanwendungen zu entfernen

Ich mag es sehr, wenn eine Webanwendung den Vorlieben der Benutzer folgt.
Also lassen Sie uns die Unterstützung für helle und dunkle Themen in einer Webanwendung implementieren.

### Wie funktioniert der dunkle Modus?

Da das Styling einer Webanwendung mit CSS erfolgt, hier ein einfaches Beispiel:

```css
/* beispiel css */
body {
  background-color: weiß;
  color: black; /* Textfarbe */
  [...]
}
[...]

/* ↑↑↑ Farbeinstellungen oben: "default" (oder "light mode") ↑↑↑ */
@media (bevorzugt-Farbschema: dunkel) {
  /* ↓↓↓ Überschreiben der Standard-Farbeinstellungen für den "dunklen Modus" ↓↓↓ */
  body {
    background-color: schwarz;
    color: white;
    [...]
  }
  [...]
}
```

Zunächst gibt es die "Standard"-Einstellungen und dann, basierend auf einer Medienabfrage, einen CSS-Block, der die Standardeinstellungen (meist Farben) für den "dunklen Modus" überschreibt.
Die CSS-Medienabfrage "prefers-color-scheme" wird heute von allen Browsern unterstützt und kann [gefahrlos] verwendet werden (https://caniuse.com/?search=prefers-color-scheme). Sie wird auch von allen wichtigen Betriebssystemen unterstützt (Windows, macOS, iOS, Android, Linux, ...).

Das war's, der dunkle Modus ist fertig. (Wie üblich gibt es Sonderfälle zu beachten, z. B. Bilder mit Transparenz)

### Die Implementierung eines Umschalters macht alles kompliziert

Da wir heutzutage in vielen Webanwendungen solche Themenumschalter finden, fügen wir auch einen hinzu.

Es scheint einfach zu sein: In einer Single Page Application (SPA) zum Beispiel könnten wir einfach local-state verwenden, um das Toggle zu implementieren.
Was aber, wenn der Benutzer die Seite neu lädt? Der Zustand ist weg. Ok, kein Problem ... fügen wir ein Flag zu localStorage hinzu, fertig ... oder nicht?
Leider gibt es ein Problem, wenn der Benutzer die Seite das erste Mal lädt (oder beim Neuladen der Seite): es gibt ein kurzes "Flackern" (von weißem zu schwarzem Hintergrund). Die Seite wird mit dem Standard-Theme geladen, und nach dem Laden der Seite wird das Theme per Javascript auf der Grundlage von localStorage auf das vom Benutzer bevorzugte Theme umgestellt. Das ist kein gutes Benutzererlebnis. Aber auch wenn dieses Problem gelöst wurde, gibt es immer noch Randfälle: Wenn eine Seite serverseitig gerendert wird, weiß der Server nichts von einer Einstellung, aber wir wollen die Seite im richtigen Layout rendern, kein Problem ... wir können ein Cookie verwenden! ... hm, Gott sei Dank gibt es einige Pakete auf npm, um die Integration zu erleichtern :-). Ah, ich vergaß ... wir müssen die Cookie-Einstellungen in unseren Datenschutzrichtlinien anpassen, wir alle kennen diesen herrlichen Dialog, der uns zwingt, "Ja, die Verwendung des Cookies ist okay" zu sagen.

### Warum fügen wir also eine Schaltfläche zum Umschalten hinzu?

Als ich darüber nachgedacht habe, sind mir zwei Dinge eingefallen:

1. Als _Entwickler_ möchte ich den dunklen Modus auf meiner Website testen und in der Lage sein, umzuschalten
2. Es könnte Bugs geben, bei denen der Darkmode versagt, etwas auf der Seite nicht "sichtbar" ist und der Benutzer sich abmüht: Aber der Benutzer könnte froh sein, einen Schalter zu haben? Vielleicht auch nicht: Es ist sehr wahrscheinlich, dass der Nutzer diesen "Workaround" nicht kennt oder die Umschaltmöglichkeit nicht findet.

In Fall 1) Wir können die Entwicklerwerkzeuge des Browsers verwenden, um den dunklen Modus zu aktivieren (oder zwischen dunkel und hell umzuschalten). Wenn wir das verwenden, brauchen wir keine Schaltfläche in der App. Hier devtools von Chrome:

![dev tools theme toggle](/img/blog/devtools-darkmode.webp)

Im Fall 2) müssen wir nur den Fehler beheben, wie üblich.

#### Aber es gibt noch etwas anderes, warum wir einen Toggle-Button für gut halten könnten

Es kann fehleranfällig sein, den Darkmode zu unterstützen. Zum Beispiel müssen wir in tailwindcss einen "dark:"-Modifikator zu jeder Klasse hinzufügen, die wir überschreiben müssen, um den Darkmode zu unterstützen. Wir müssen also aufpassen, dass wir ihn nicht vergessen. Aber wir werden einen vergessen (weil wir es können). Er sieht so aus:

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
