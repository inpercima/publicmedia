FROM node:12.16.1-alpine AS build-js

ARG PROFILE

# see https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
ENV USER node
USER ${USER}
WORKDIR /home/${USER}

COPY api/ api/

RUN mkdir client/ && chown -R ${USER} client/
WORKDIR /home/${USER}/client

COPY --chown=${USER} client/src/ ./src/
COPY --chown=${USER} client/angular.json .
COPY --chown=${USER} client/browserslist .
COPY --chown=${USER} client/package.json .
COPY --chown=${USER} client/tsconfig.app.json .
COPY --chown=${USER} client/tsconfig.json .
COPY --chown=${USER} client/tsconfig.spec.json .
COPY --chown=${USER} client/e2e/tsconfig.json ./e2e/
COPY --chown=${USER} client/tslint.json .
COPY --chown=${USER} client/webpack.config.js .
COPY --chown=${USER} client/yarn.lock .

RUN yarn
RUN yarn build:prod

FROM php:7.3-apache

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

RUN a2enmod rewrite

RUN ln -snf /usr/share/zoneinfo/Europe/Berlin /etc/localtime \
    && echo "Europe/Berlin" > /etc/timezone \
    && apt-get update \
    && apt-get install wget -y

COPY client/src/.htaccess /var/www/html/
COPY --from=build-js /home/node/client/dist /var/www/html/
