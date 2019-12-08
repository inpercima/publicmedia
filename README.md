# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool used to get public data from an instagram account without permission.

* Before December 2017: [https://instagram.com/username/media](https://instagram.com/instagram/media)
* Before April 2018: [https://instagram.com/username/?__a=1](https://instagram.com/instagram/?__a=1)
* Before August 2019: Check [https://instagram.com/username/](https://instagram.com/instagram/) and get data from inline javascript
* Now: Check [https://www.instagram.com/graphql](https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"25025320","first":"50"})

A demo version is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net) with username = password = **publicmedia**.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 1.0.1.

## Prerequisites

### Angular CLI

* `angular-cli 8.3.20` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Docker

* `docker 19.03.5` or higher
* `docker-compose 1.25.0` or higher

### Node, npm or yarn

* `node 12.3.1` or higher in combination with
  * `npm 6.12.1` or higher or
  * `yarn 1.19.1` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | wanted version | reason |
| ---------- | --------------- | -------------- | ------ |
| copy-webpack-plugin | 4.6.0 | 5.0.3 | copy-webpack-plugin@5.0.3" has unmet peer dependency "webpack@^4.0.0" |
| zone.js    | 0.9.1           | 0.10.2         | @angular/core@8.2.14" has incorrect peer dependency "zone.js@~0.9.1" |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular@0.803.20" has incorrect peer dependency "typescript@>=3.1 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular-devkit/build-angular > @ngtools/webpack@8.3.20" has incorrect peer dependency "typescript@>=3.4 < 3.6 |
| typescript | 3.5.3           | 3.7.2          | @angular/compiler-cli@8.2.14" has incorrect peer dependency "typescript@>=3.4 <3.6 |

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
