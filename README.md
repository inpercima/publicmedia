# publicmedia

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A tool used to get public data from an instagram account without permission.

* Before December 2017
  * check [https://www.instagram.com/username/media](https://www.instagram.com/instagram/media)
  * no longer works - page not found
* Between December 2017 and April 2018
  * [https://www.instagram.com/username/?__a=1](https://www.instagram.com/instagram/?__a=1)
  * still works
  * just get last 12 items
  * to many request will be blocked for some minutes
* Between April 2018 and August 2019
  * check [https://www.instagram.com/username/](https://www.instagram.com/instagram/)
  * get data from inline javascript
  * no longer works - obfuscated code
* After August 2019
  * check [https://www.instagram.com/graphql/query/?query_hash=...](https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"25025320","first":"50"})
  * still works

This app is online under [publicmedia.inpercima.net](http://publicmedia.inpercima.net).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.1.0.

## Prerequisites

### Angular CLI

* `angular-cli 11.0.5` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 12.19.0` or higher in combination with
  * `npm 6.14.8` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library             | current version | wanted version | reason |
| ------------------- | --------------- | -------------- | ------ |
| copy-webpack-plugin | 4.6.0           | 7.0.0          | copy-webpack-plugin@7.0.0" has unmet peer dependency "webpack@^5.1.0" |
| typescript          | 4.0.5           | 4.1.3          | @angular-devkit/build-angular@0.1100.5" has incorrect peer dependency "typescript@~4.0.0" |
| zone.js             | 0.10.3          | 0.11.3         | @angular/core@11.0.5" has incorrect peer dependency "zone.js@~0.10.3" |

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
