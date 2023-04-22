FROM node:18.14.0-slim AS build

WORKDIR app

COPY package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build:ci

EXPOSE 3000

USER node

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]

