### Eine progressive Webanwendung (PWA), erstellt mit Next.js

Da ich motiviert war, einige Technologien zu testen, habe ich beschlossen
eine PWA für eine Einkaufsliste zu bauen. Das tolle daran ist, dass zunächst keine Kosten anfallen, weder für das Hosting der App noch für die Datenbank.
Konkret habe ich mich für folgende Technologien interessiert:

- Neueste Version von [Next.js](https://nextjs.org/) mit App-Router und SSR (Server Side Rendering)
- Internationalisierung mit next-intl
- Hosting auf [Vercel](https://vercel.com/) (free tier)
- [Atlas](https://www.mongodb.com) MongoDB als Datenbank (free tier)
- Mongoose als ODM (Object Document Mapper)
- [Tailwind CSS](https://tailwindcss.com/) zusammen mit radix-ui/colors für das Styling

#### Ergebnis (Developer Experience)

- Mongoose ist nicht die beste Wahl, wenn TypeScript verwendet wird. Besser scheint [Prisma](https://www.prisma.io).
- Das Hosting bei Vercel hat sehr gut funktioniert, gute Dokumentation und einfach zu bedienen. Für den Start von Projekten eine sehr gute Wahl. Das einzige was ich kritisch sehe: Container-basierte Bereitstellungen werden nicht unterstützt. So muss die App für die Bereitstellung auf dem Produktivsystem immer gebaut werden, was Zeit kostet. Neben anderen wichtigen Eigenschaften ist die Bereitstellung in einem Container deutlich schneller.

Der Quelltext ist auf github (Link im footer der App).
Hier der Link zur App: [shopping-list-app](https://shopping-list-eta.vercel.app/)  
Oder scannen Sie diesen QR-Code, wenn Sie die App auf Ihrem mobilen Gerät testen wollen:
