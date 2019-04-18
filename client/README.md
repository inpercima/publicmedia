# publicmedia - client

[![dependencies Status](https://david-dm.org/inpercima/publicmedia/status.svg)](https://david-dm.org/inpercima/publicmedia?path=client)
[![devDependencies Status](https://david-dm.org/inpercima/publicmedia/dev-status.svg)](https://david-dm.org/inpercima/publicmedia?type=dev&path=client)

## Getting started

```bash
# all commands used in ./client
cd client

# install tools and frontend dependencies
yarn
```

Create environment files for `devMode`, `mockMode` and `prodMode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.mock.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

Update these files for your environment.
Change for prodMode the option `production` to `true` and for mockMode the option `api` to `http://localhost:3000/`.
Note: These files will not be under version control and listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
You can do this for example with `yarn serve:mock`.
For the other options your app should run on a server which you like.

### Run in devMode with mock data

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

### Run in devMode with real data, if present

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
```

### Package in prodMode

```bash
# build in prodMode, compressed, in ./dist you will find the output.
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
* [username](#username)

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

Note: This option must also be changed in the styles.css if you want to change it.

### `username`

Name of a instagram account to be checked.

* default: `instagram`
* type: `string`
