Web application for blog posts and portfolio with i18n support based on Next.js.

## Development

### Prerequisites

git and node installed

### Installation

Go to shell, change into your projects directory (e.g ~/dev):

```bash
mkdir -p rs-de && cd rs-de
```

Clone the repo and install dependencies:

```bash
git clone https://github.com/rs-de/www && cd www && npm i
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

## Deployment

### From local machine

#### Prerequisites

- [flyctl](https://fly.io/docs/flyctl/) installed and logged in by `flyctl auth login`

#### Deploy

In project-root directory run:

```bash
flyctl deploy .
```

### CI/CD

Deployed automatically by github action on push to main branch.

## References

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
