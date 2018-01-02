# About publicmedia
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://david-dm.org/inpercima/publicmedia/status.svg)](https://david-dm.org/inpercima/publicmedia)
[![devDependencies Status](https://david-dm.org/inpercima/publicmedia/dev-status.svg)](https://david-dm.org/inpercima/publicmedia?type=dev)

A tool used to get public data from an instagram account without permission.
It gets data a non-logged-in user can see via the public media address like [https://instagram.com/instagram/media](https://instagram.com/instagram/media).
This tool is a testtool to learn more about angular, typescript and webpack.

The php version is online under http://publicmedia.inpercima.net. Use username = inpercima and password = publicmedia in this demo.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate).

# Necessary tools
* node 6.9.x or higher

# Optionally tools
* npm 5.3 or higher
* yarn 1.0.1 or higher

# Recommended tools
* [TypeScript IDE](https://marketplace.eclipse.org/content/typescript-ide) plugin for eclipse

# Usage

```
git clone https://github.com/inpercima/publicmedia
cd publicmedia

# copy config.default.json to config.json
cp config/config.default.json config/config.json

# use your existing instagram username and define it in config.json
# username

# install tools and frontend dependencies via npm or yarn
# npm
npm install

# yarn
yarn

# build resources in devMode with devServer
npm/yarn run build:server
http://localhost:8080/

# build resources in devMode, used with own server component
npm/yarn run build:dev

# build resources in devMode, used with own server component, watch changes and rebuild
npm/yarn run build:watch

# build resources in prodMode, used with own server component, compressed
npm/yarn run build:prod
```

# Configuration
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| appname | String | helloWorld | applicationwide title of the app, displayed in title and toolbar |
| routes/activateLogin | Boolean | true | define that a login page should be used (`true`/`false`) |
| routes/defaultRoute | String | home | the default route after login if no route is stored |
| routes/showFeatures | Boolean | true | define that the feature routes should be displayed in the navigation (`true`/`false`) |
| routes/showLogin | Boolean | false | define that the login route should be displayed in the navigation (`true`/`false`), works in combination with `activateLogin`, the login route will be displayed only if both options set to `true` |
| theme | String | indigo-pink | name of a build-in theme from angular-material, one of `deeppurple-amber`, `indigo-pink`, `pink-bluegrey`, `purple-green` |
| username | String | EMPTY | the instagram username |
