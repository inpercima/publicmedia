# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool that shows how public data can be accessed from Instagram without an Instagram account.

Currently there is no really option available but try these common options.

* Before December 2017
  * check [https://www.instagram.com/username/media](https://www.instagram.com/instagram/media)
  * no longer works - page not found
* Between December 2017 and April 2018
  * [https://www.instagram.com/username/?__a=1](https://www.instagram.com/instagram/?__a=1)
  * just get last 12 items
  * still works in some cases but to many request will be blocked for some minutes
* Between April 2018 and August 2019
  * check [https://www.instagram.com/username/](https://www.instagram.com/instagram/)
  * get data from inline javascript
  * no longer works - obfuscated code
* After August 2019
  * check [https://www.instagram.com/graphql/query/?query_hash=...](https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"25025320","first":"50"})
  * still works in some cases but to many request will be blocked for some minutes

This app is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.5.3.

## Prerequisites

### Angular CLI

* `@angular/cli 17.2.2` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 8.0` or higher

### Node, npm or yarn

* `node 18.16.0` or higher in combination with
  * `npm 9.5.1` or higher or
  * `yarn 1.22.19` or higher, used in this repository

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
