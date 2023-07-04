Web application for blog posts and portfolio with i18n support based on Next.js.

## Development

Clone this repo, change into created directory (www) and install dependencies:

```bash
npm i
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker image local testing

Prerequisites: Docker client installed and docker daemon is running

Build it

```
docker build -t rs-de-www:latest  .
```

Run it

```
docker compose up
```

## References

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
