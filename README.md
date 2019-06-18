# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool used to get public data from an instagram account without permission.

* Before December 2017: [https://instagram.com/instagram/media](https://instagram.com/instagram/media)
* Before April 2018: [ttps://instagram.com/instagram/?__a=1](https://instagram.com/instagram/?__a=1)
* Now: Check [https://instagram.com/instagram/](https://instagram.com/instagram/) and get data from inline javascript

A demo version is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net) with username = password = **publicmedia**.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 0.4.0.

## Prerequisites

### Introduction

Depending on the platform you use, the following prerequisites are necessary.

### Angular CLI

* `angular-cli 8.0.3` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Docker

* `docker 17.05.0-ce` or higher
* `docker-compose 1.9` or higher

### Node, npm or yarn

* `node 12.3.1` or higher in combination with
  * `npm 6.9.0` or higher or
  * `yarn 1.16.0` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | version | reason |
| ---------- | ------- | ------ |
| typescript | 3.4.3   | @angular-devkit/build-angular > @ngtools/webpack@8.0.2" has incorrect peer dependency "typescript@>=3.4 < 3.5 |
| copy-webpack-plugin | 4.6.0 | copy-webpack-plugin@5.0.3" has unmet peer dependency "webpack@^4.0.0" |

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

### Modules

For the client check [publicmedia - client](https://github.com/inpercima/publicmedia/tree/master/client).

For the api check [publicmedia - api](https://github.com/inpercima/publicmedia/tree/master/api).
