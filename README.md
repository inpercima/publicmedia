# About this - publicmedia
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://david-dm.org/inpercima/publicmedia/status.svg)](https://david-dm.org/inpercima/publicmedia)
[![devDependencies Status](https://david-dm.org/inpercima/publicmedia/dev-status.svg)](https://david-dm.org/inpercima/publicmedia?type=dev)

A tool used to get public data from an instagram account without permission.

* Before December 2017: https://instagram.com/instagram/media
* Before April 2018: https://instagram.com/instagram/?__a=1
* Now: Check https://instagram.com/instagram/ and get data from inline javascript

The php version is online under http://publicmedia.inpercima.net.
Use username = inpercima and password = publicmedia in this demo.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate).

# Prerequisites
## Node, npm or yarn
* `node 8.10.0` or higher in combination with
  * `npm 5.7.1` or higher or
  * `yarn 1.5.1` or higher, used in this repository
* `php 7` or higher

# Getting started

```
# clone project
git clone https://github.com/inpercima/publicmedia
cd publicmedia

# copy src/config.default.json to src/config.json
cp src/config.default.json src/config.json

# install tools and frontend dependencies
yarn
```

# Usage

```
# build in devMode
yarn run build:dev

# build in prodMode, compressed
yarn run build:prod

# build in devMode and start a server, rebuild after changes
yarn run serve
# open result in browser
http://localhost:4200/
```

# Configuration
## General
All options have to bet set but some of them do not need to be changed.

## Table of contents
* [appname](#appname)
* [routes/default](#routesdefault)
* [routes/features/show](#routesfeaturesshow)
* [routes/login/activate](#routesloginactivate)
* [routes/login/show](#routesloginshow)
* [routes/notFound/redirect](#routesnotfoundredirect)
* [theme](#theme)
* [username](#username)

## `appname`
Applicationwide title of the app, displayed in title and toolbar.
* default: `publicmedia`
* type: `string`

## `routes/default`
The main route and the redirect route after login if no route is stored.
* default: `dashboard`
* type: `string`

## `routes/features/show`
Defines whether feature routes will be displayed or not.
* default: `true`
* type: `boolean`
* values: `true`/`false`

## `routes/login/activate`
Defines whether a login will be used or not.
* default: `true`
* type: `boolean`
* values: `true`/`false`

## `routes/login/show`
Defines whether login route will be displayed or not.
* default: `false`
* type: `boolean`
* values: `true`/`false`

## `routes/notFound/redirect`
Defines whether the 404 route will redirect to the default route or not.
* default: `false`
* type: `boolean`
* values: `true`/`false`

## `theme`
Name of a build-in theme from angular-material.
* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`

## `username`
Name of instagram account you want to use.
* default: EMPTY
* type: `string`
