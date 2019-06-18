FROM node:12.4-alpine AS build-js

USER node
WORKDIR /home/node

RUN mkdir client/ && chown node client/
COPY --chown=node api/ api/
COPY --chown=node client/src/ client/src/
COPY --chown=node client/angular.json client/
COPY --chown=node client/browserslist client/
COPY --chown=node client/package.json client/
COPY --chown=node client/tsconfig.app.json client/
COPY --chown=node client/tsconfig.json client/
COPY --chown=node client/tslint.json client/
COPY --chown=node client/webpack.config.js client/
COPY --chown=node client/yarn.lock client/

WORKDIR /home/node/client

RUN yarn
RUN yarn build:prod:docker

FROM php:7.3-apache

RUN a2enmod rewrite

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

COPY --from=build-js /home/node/client/dist /var/www/html/
