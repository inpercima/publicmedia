FROM node:carbon AS build-js

USER node
WORKDIR /home/node

COPY --chown=node src/ ./src
COPY --chown=node package.json .
COPY --chown=node tsconfig.json .
COPY --chown=node tslint.json .
COPY --chown=node typings.d.ts .
COPY --chown=node webpack.common.js .
COPY --chown=node webpack.prod.js .

RUN yarn
RUN yarn build:prod

FROM php:7.2-apache

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

COPY --from=build-js /home/node/dist /var/www/html/
