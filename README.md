# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool used to get public data from an Instagram account without permission.

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

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.3.1.

## Prerequisites

### Angular CLI

* `angular-cli 12.1.1` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 14.16.1` or higher in combination with
  * `npm 6.14.12` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | last version | reason |
| ---------- | --------------- | ------------ | ------ |
| rxjs       | 6.6.0           | 7.2.0        | "@angular/common@12.1.1" has incorrect peer dependency "rxjs@^6.5.3" |
| copy-webpack-plugin | 9.0.0  | 9.0.1        | "copy-webpack-plugin@9.0.1" has unmet peer dependency "webpack@^5.1.0 |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/publicmedia/
cd publicmedia
```

## Usage

### Modules

For the client check [publicmedia - client](./client).

For the server check [publicmedia - api](./api).
