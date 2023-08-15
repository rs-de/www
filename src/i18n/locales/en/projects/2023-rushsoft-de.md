### What about Static Site Generation (SSG) and Next 13 with new app-router?

Since I did Single Page Applications (SPA) for a long time I was interested in
building a static "informational" website (SEO friendly) like this one with Next.js.
I defined this requirements:

- Static Site Generation (SSG)
- Use [Next.js](https://nextjs.org/) with new app router
- Internationalization (i18n) support (2 languages)
- Hosting on [fly.io](https://fly.io) since it supports container based deployments and zero costs starting a project.
- Styling with radix [radix-ui/colors](https://www.radix-ui.com/colors)

#### Outcome

- Internationalization with SSG with Next.js app router was not ready to use (work in progress), so I switched to pages router for now.
- Styling with radix-ui/colors works well: No extra "dark:" prefixed rules needed (only in some edge cases)
- Hosting on fly.io works well, no issues, good documentation, easy to use, no costs for small projects (July, 2023).
- Nice lighthouse results, see [blog](/blog/web-app-quality-assurance)

This project is public on github (link in above in navbar)
