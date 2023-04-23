FROM node:18.14.0-slim AS build

WORKDIR app

COPY package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build:ci

FROM build AS prune

RUN npm prune --production

#FROM node:18.14.0-slim
FROM node:18.14.0-alpine

WORKDIR app

COPY --from=prune app/node_modules node_modules
COPY --from=build app/dist/src dist
COPY --from=build app/package.json .

EXPOSE 3000

USER node

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]

