### Static Site Generation (SSG) mit Next.js 13 und neuem "app-router"?

Da ich die letzten Jahre Single Page Applications (SPA) entwickelt habe, war ich daran interessiert eine statische webseite (SEO-freundlich) - eben diese hier - mit [Next.js](https://nextjs.org/) zu erstellen.
Ich definierte folgende technischen Anforderungen:

- Statische Seitengenerierung (SSG)
- Verwendung von Next.js mit neuem App-Router
- Internationalisierung (i18n) Unterstützung (2 Sprachen)
- Hosting auf [fly.io](https://fly.io), da es containerbasierte Bereitstellungen und Nullkosten beim Start eines Projekts unterstützt
- Styling mit [tailwindcss](https://tailwindcss.com) und [radix-ui/colors](https://www.radix-ui.com/colors)

#### Ergebnis

- Internationalisierung mit SSG mit Next.js App-Router war nicht fertig: Umstellung auf "pages-router" erforderlich
- Das Styling mit radix-ui/colors funktioniert gut: Keine extra "dark:" vorangestellten Regeln nötig (Spezialfälle ausgenommen)
- Hosting auf fly.io toll, keine Probleme, sehr gute Dokumentation, einfach zu bedienen, keine Kosten für kleine Projekte (Juli 2023)
- Sehr gute Seiten Qualität nach lighthouse, siehe [blog](/img/blog/web-app-quality-assurance)

Das Project is öffentlich auf github (siehe Link, oben rechts in der Navi)
