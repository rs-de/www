## Qualitätssicherung für Webanwendungen

Sobald eine Webanwendung funktionsfähig und einsatzbereit ist, ist ein wichtiger Schritt getan.

- die Bereitstellung des Geschäftswerts - ist erreicht. Schön!
  Aber es gibt noch eine weitere Sache, um die man sich kümmern muss: **Qualitätssicherung (QA)**. Glücklicherweise
  gibt es Open-Source-Tools, mit denen verschiedene Aspekte einer Webanwendung überprüft werden können.

Da ich gerade _diese_ Seite aufbaue, habe ich sie überprüft und werde die verwendeten Tools und die Ergebnisse beschreiben, die ich erhalten habe.

### Google Lighthouse

#### Voraussetzungen

- Google Chrome Browser installiert

Das erste Tool ist [Google Lighthouse] (https://developers.google.com/web/tools/lighthouse/).
Jeder, der einen Google Chrome Browser installiert hat, kann es nutzen. Es ist in den Entwicklertools integriert,
um es zu öffnen, drücken Sie einfach _F12_ auf MS Windows und _Befehl+Wahl+I_ auf Mac.
Als es auf meiner Seite lief, bekam ich ziemlich gute Ergebnisse, aber die SEO (Search Engine Optimization) Ergebnisse waren nicht so gut, weil die Meta-Tags der Seite fehlten.
Nachdem ich die Meta-Beschreibungs-Tags auf der Seite hinzugefügt hatte, erhielt ich folgendes Ergebnis:
![Google Lighthouse Endergebnis von rushsoft.de im Jahr 2023](/img/blog/lighthouse-result-rushsoft-de-2023.png)
Diese kleinen farbigen Punkte sind Teil einer "Feuerwerk-Animation", die die Google-Entwickler dem Tool hinzugefügt haben, wenn eine App eine Punktzahl von 100% in allen Kategorien erreicht :-)\_

Toll! 100% in allen Kategorien. Aber was bedeutet das? Werfen wir einen Blick auf die Kategorien.
Stopp ... zu viele Details. [80/20-Regel] (https://en.wikipedia.org/wiki/Pareto_principle). Nur wenn es etwas Schlimmes gibt, müssen wir nachforschen.
Und schlecht bedeutet: _rot_ oder _orange_, wenn das Tool ein _grünes_ Ergebnis anzeigt, ist das normalerweise gut genug.
In meinem Fall gab es bereits ein gutes Ergebnis, und der Aufwand, es zu verbessern, war gering (Minuten), also habe ich es getan.
Nächstes Tool, mehr über Sicherheit ...

### OWASP ZAP

#### Voraussetzungen

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installiert

Das nächste von mir verwendete Tool ist [OWASP ZAP](https://www.zaproxy.org/).
Es ist ein Tool zur Überprüfung von Webanwendungen auf Sicherheitsprobleme.
Es ist als Desktop-Anwendung und als Docker-Image verfügbar.
Ich habe das Docker-Image verwendet, um meine Seite zu überprüfen (Domain durch Beispiel ersetzt):

```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com
```

Es ist nur eine Basislinie, eine passive Prüfung, aber es ist ein guter Anfang und einfach zu benutzen, wie Sie sehen können.
ZAP crawlt und fragt alle Seiten ab, die es finden kann und erstellt Berichte über seine Ergebnisse.
(Ein gutes Beispiel, warum es wichtig ist, das HTML-Anker-Element anstelle von JavaScript für Links zu verwenden).

Hier ist das Ergebnis:

```bash
WARN-NEU: Cache-control-Richtlinien erneut prüfen [10015] x 8
WARN-NEW: Fehlende Anti-Klickjacking-Kopfzeile [10020] x 8
WARN-NEW: X-Content-Type-Options-Kopfzeile fehlt [10021] x 11
WARN-NEW: Offenlegung von Informationen - Verdächtige Kommentare [10027] x 11
WARN-NEW: Strict-Transport-Security Header nicht gesetzt [10035] x 11
WARN-NEW: Server gibt Versionsinformationen über das HTTP-Antwort-Header-Feld "Server" preis [10036] x 11
WARN-NEU: Server verrät Informationen über "X-Powered-By" HTTP-Antwort-Header-Feld(er) [10037] x 10
WARN-NEW: Inhaltssicherheitsrichtlinie (CSP) Header nicht gesetzt [10038] x 10
WARN-NEW: Nicht speicherbarer Inhalt [10049] x 11
WARN-NEW: Berechtigungsrichtlinien-Kopfzeile nicht gesetzt [10063] x 11
WARN-NEW: Offenlegung von Zeitstempeln - Unix [10096] x 2
WARN-NEW: Moderne Webanwendung [10109] x 10
```

Ich habe die bestandenen Prüfungen und die Zeilen mit den Links zu den Seiten entfernt, da sie für diesen Beitrag nicht relevant sind.

Das Ergebnis ist gar nicht so schlecht. Die Warnungen beziehen sich hauptsächlich auf fehlende HTTP-Antwort-Header.
Da die Seite mit [Next.js] (https://nextjs.org/) erstellt wird, aber nicht über [Vercel] (https://vercel.com/) bereitgestellt wird, müssen diese Header manuell hinzugefügt werden.

Leider konnte ein Header nicht behoben werden (ohne Hacks) - der erste: _Re-examine Cache-control Directives_.
Wenn man Frameworks verwendet, muss man manchmal Einschränkungen in Kauf nehmen.

### Fazit

- Die Tools sind einfach zu bedienen und geben einen guten Überblick über die Qualität einer Webanwendung.
- Es gibt Optionen, um sie in eine CI/CD-Pipeline einzubinden, vielleicht nicht für jeden Lauf, aber für einen nächtlichen Lauf.

### Vorsicht

Es ist wichtig, den Status Quo eines Projekts mit den Stakeholdern zu besprechen und zu überprüfen und die Ziele Schritt für Schritt zu definieren.
Es ist nicht notwendig, in allen Kategorien 100 % zu erreichen. Es ist wichtig, die Risiken zu kennen und einen Plan zu haben, um sie abzumildern.
