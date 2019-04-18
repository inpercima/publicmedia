# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool used to get public data from an instagram account without permission.

* Before December 2017: [https://instagram.com/instagram/media](https://instagram.com/instagram/media)
* Before April 2018: [ttps://instagram.com/instagram/?__a=1](https://instagram.com/instagram/?__a=1)
* Now: Check [https://instagram.com/instagram/](https://instagram.com/instagram/) and get data from inline javascript

A demo version is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net) with username = password = **publicmedia**.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 0.3.2-SNAPSHOT.

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

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | version | reason |
| ---------- | ------- | ------ |
| core-js    | 2.6.5   | [core-js@3, babel and a look into the future](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md), newer version running into errors |
| typescript | 3.2.4   | @angular-devkit/build-angular > @ngtools/webpack@7.3.8" has incorrect peer dependency "typescript@>=2.4.0 < 3.3" |
| zone-js    | 0.8.29  | @angular/core@7.2.13" has incorrect peer dependency "zone.js@~0.8.26" |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/publicmedia
cd publicmedia
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

For the client check [publicmedia - client](https://github.com/inpercima/publicmedia/tree/master/client).

For the api check [publicmedia - api](https://github.com/inpercima/publicmedia/tree/master/api).
