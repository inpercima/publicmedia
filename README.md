# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool that shows how public data can be accessed from Instagram without an Instagram account.

Currently there is no really option available but try these common options.

* Before December 2017
  * check [https://www.instagram.com/username/media](https://www.instagram.com/instagram/media)
  * no longer works - redirected to login page
* Between December 2017 and April 2018
  * check [https://www.instagram.com/username/?__a=1](https://www.instagram.com/instagram/?__a=1)
  * no longer works - redirected to login page
* Between April 2018 and August 2019
  * check [https://www.instagram.com/username/](https://www.instagram.com/instagram/)
  * grab data from inline javascript
  * no longer works - obfuscated code
* After August 2019
  * check [https://www.instagram.com/graphql/query/?query_hash=...](https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"25025320","first":"50"})
  * no longer works on webspace
  * still works on localhost but to many request will be blocked for some minutes
  * still works on localhost with using proxy - read frontend README

This app is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.5.3.

## Prerequisites

### Angular CLI

* `@angular/cli 19.1.8` or higher

### Apache and php

Is required if started locally and not with Docker.

* `Apache 2.4` or higher
* `php 8.2` or higher

### Docker

* `docker 27.5.1` or higher

### Node, npm or pnpm

* `node 22.14.0` or higher in combination with
  * `npm 10.9.2` or higher or
  * `pnpm 10.4.1` or higher, used in this repository

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/publicmedia/
cd publicmedia
```

## Usage

### Modules

For the frontend check [publicmedia - frontend](./frontend).

For the backend check [publicmedia - api](./api).

For the docker check [publicmedia - docker](./README_docker.md).
