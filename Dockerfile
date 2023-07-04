FROM node:18-alpine3.18

WORKDIR /app
COPY ./.next/standalone .
COPY ./.next/static ./.next/static
COPY ./public ./public

ENV NODE_ENV production
ENV PORT 8080
ENV HOSTNAME 0.0.0.0

USER node
EXPOSE 8080
CMD ["node", "server.js" ]