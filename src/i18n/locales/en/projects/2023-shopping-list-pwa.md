### A progressive web app (PWA) build with Next.js

Since I was motivated to test some stuff I did not work with sof ar, I decided
to build a shopping list progressive web app. The cool thing is, that there
are zero hosting-costs either for hosting of the app nor for the database.
I decided to use following stack:

- Latest Version of [Next.js](https://nextjs.org/) with app-router and SSR (Server Side Rendering)
- Internationalization with [next-intl]
- Hosting on [Vercel](https://vercel.com/) (free tier)
- [Atlas](https://www.mongodb.com) mongodb as database (free tier)
- [Mongoose](https://mongoosejs.com) as ODM (Object Document Mapper)
- [Tailwind CSS](https://tailwindcss.com/) together with radix-ui/colors for styling

#### Developer experience outcome

- Mongoose is not the best choice if TypeScript is used. Better seams to be [Prisma](https://www.prisma.io)
- Hosting at Vercel did work very well, good documentation and easy to use. To start projects a very good choice. The only thing I'm more critical is that container based deployments are not supported, so a build for production deployments is required which takes time. Container based deployments are much faster(there are other importend advantages, but not developer experience related).

Here the link to the [shopping-list-app](https://shopping-list-eta.vercel.app/)
Or use this QR-Code, if you want to test it on your mobile device:
