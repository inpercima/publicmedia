FROM node:carbon AS build-js

USER node
WORKDIR /home/node

COPY --chown=node src/ ./src
COPY --chown=node angular.json .
COPY --chown=node package.json .
COPY --chown=node tsconfig.json .
COPY --chown=node tslint.json .
COPY --chown=node webpack.config.js .
COPY --chown=node yarn.lock .

RUN yarn
RUN yarn build:prod:docker

FROM php:7.2-apache

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

COPY --from=build-js /home/node/dist /var/www/html/
