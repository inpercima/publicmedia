# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://david-dm.org/inpercima/publicmedia/status.svg)](https://david-dm.org/inpercima/publicmedia)
[![devDependencies Status](https://david-dm.org/inpercima/publicmedia/dev-status.svg)](https://david-dm.org/inpercima/publicmedia?type=dev)

A tool used to get public data from an instagram account without permission.

* Before December 2017: [https://instagram.com/instagram/media](https://instagram.com/instagram/media)
* Before April 2018: [ttps://instagram.com/instagram/?__a=1](https://instagram.com/instagram/?__a=1)
* Now: Check [https://instagram.com/instagram/](https://instagram.com/instagram/) and get data from inline javascript

A demo version is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net) with username = password = **publicmedia**.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 0.3.0.

## Prerequisites

### Introduction

Depending on the platform you use, the following prerequisites are necessary.

### Angular CLI

* `angular-cli 7.3.8` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Docker

* `docker 17.05.0-ce` or higher
* `docker-compose 1.9` or higher

### Node, npm or yarn

* `node 10.15.3` or higher in combination with
  * `npm 6.4.1` or higher or
  * `yarn 1.13.0` or higher, used in this repository

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/publicmedia
cd publicmedia

# install tools and frontend dependencies
cd client
yarn
```

## Usage

### Dockerfile

Normally the docker version is used to build and run the productive version, so it is prepared as productive.

```bash
# build the image and container
docker-compose build

# run the container
docker-compose up -d

# stop the container
docker-compose down
```

### Recommendation

It is recommanded to use a server to get full access of all angular.
You can do this for example with `yarn serve:mock`.
For the other options your app should run on a server which you like.

### DevMode with mock data

Start in a separate terminal a server with mock data, reachable on [http://localhost:3000/](http://localhost:3000/).

```bash
yarn run:mock
```

Chose one of the following to work in devMode with mock data.

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:mock

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:mock

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:mock
```

### DevMode with real data, if present

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
```

### ProdMode

```bash
# build in prodMode, compressed
yarn build:prod
```

### Tests

```bash
# test
ng test

# e2e
ng e2e
```

## Configuration

### General

All options have to bet set in the environment files but some of them do not need to be changed.
All defaults refer to the development environment file (`environment.ts`).
All deviations are described in addition as `mock` and `production`.

### Table of contents

* [activateLogin](#activateLogin)
* [api](#api)
* [apiSuffix](#apiSuffix)
* [appname](#appname)
* [defaultRoute](#defaultRoute)
* [production](#production)
* [redirectNotFound](#redirectNotFound)
* [showFeatures](#showFeatures)
* [showLogin](#showLogin)
* [theme](#theme)

### `activateLogin`

Defines whether a login will be used or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `api`

Defines the URL to the backend.

* default: `./api/` | mock: `http://localhost:3000/` | production: `./api/`
* type: `string`

### `apiSuffix`

Defines a suffix for the api to the backend.

* default: EMPTY
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `publicmedia`
* type: `string`

### `defaultRoute`

The main route and the redirect route after login if no route is stored.

* default: `last-post`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false` | mock: `false` | production: `true`
* type: `boolean`
* values: `true`/`false`

### `redirectNotFound`

Defines whether the 404 route will redirect to the default route or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `showFeatures`

Defines whether feature routes will be displayed or not.

* default: `true`
* type: `boolean`
* values: `true`/`false`

### `showLogin`

Defines whether login route will be displayed or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `theme`

Name of a build-in theme from angular-material.

* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`

Note: This option must also be changed in the angular.json if you want to change it.

### `username`

Name of instagram account you want to use.

* default: EMPTY
* type: `string`
