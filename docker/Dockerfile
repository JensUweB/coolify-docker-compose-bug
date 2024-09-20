FROM node:22-alpine

RUN mkdir -p /app
COPY main.js /app

USER node
WORKDIR /app

CMD [ "node", "/app/main.js"]

EXPOSE 3000
