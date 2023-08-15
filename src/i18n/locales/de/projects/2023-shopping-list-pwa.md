### Eine progressive Webanwendung (PWA), erstellt mit Next.js

Da ich motiviert war, einige Technologien zu testen, habe ich beschlossen
eine progressive Webapplikation für eine Einkaufsliste zu bauen. Das coole daran ist, dass
keine Kosten anfallen, weder für das Hosting der App noch für die Datenbank.
Ich habe mich für den folgenden Stack entschieden:

- Neueste Version von [Next.js](https://nextjs.org/) mit App-Router und SSR (Server Side Rendering)
- Internationalisierung mit next-intl
- Hosting auf [Vercel](https://vercel.com/) (free tier)
- [Atlas](https://www.mongodb.com) MongoDB als Datenbank (free tier)
- Mongoose als ODM (Object Document Mapper)
- [Tailwind CSS](https://tailwindcss.com/) zusammen mit radix-ui/colors für das Styling

#### Ergebnis

- Mongoose ist nicht die beste Wahl, wenn TypeScript verwendet wird. Besser scheint [Prisma](https://www.prisma.io).
- Das Hosting bei Vercel hat sehr gut funktioniert, gute Dokumentation und einfach zu bedienen. Für den Start von Projekten eine sehr gute Wahl. Das einzige, was ich kritisch sehe, ist, dass Container-basierte Bereitstellungen nicht unterstützt werden, so dass ein Build für das Deployment auf das Produktionssystem erforderlich ist, was Zeit kostet. Container basierte Deployments sind viel schneller (es gibt noch andere Vorteile, die aber nicht mit der Developer-Experience zusammenhängen).

Der Quelltext ist auf github (Link im footer der App).
Hier der Link zur [shopping-list-app](https://shopping-list-eta.vercel.app/)
Oder benutzen Sie diesen QR-Code, wenn Sie die App auf Ihrem mobilen Gerät testen wollen:
