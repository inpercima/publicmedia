# publicmedia
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://david-dm.org/inpercima/publicmedia/status.svg)](https://david-dm.org/inpercima/publicmedia)
[![devDependencies Status](https://david-dm.org/inpercima/publicmedia/dev-status.svg)](https://david-dm.org/inpercima/publicmedia?type=dev)

A tool used to get public data from an instagram account without permission. It gets data a non-logged-in user can see via the public media
address like [https://instagram.com/instagram/media](https://instagram.com/instagram/media). This tool is a testtool to learn more about
angular, typescript and webpack.

The php version is online under [http://publicmedia.inpercima.net](http://publicmedia.inpercima.net). Use username = inpercima and password = publicmedia in this demo.

# necessary tools and accounts

* node 6.9.x or higher
* npm 5.3.x  or higher
* an account on instagram
* apache server with php7

# recommended tools
* yarn
* [TypeScript IDE](https://marketplace.eclipse.org/content/typescript-ide) plugin for eclipse

# simple usage

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

    # build resources in devMode with devServer, no php, open site in browser
    npm run build
    http://localhost:8080/

    # build resources in devMode without devSever, php
    npm run build:dev

    # build resources in devMode without devSever, php, watch changes and rebuild
    npm run build:watch

    # build resources in prodMode, php
    npm run build:prod

# config

Under config/config.json some application configuration could be set.

* `appname` applicationwide title of the app, displayed in title and toolbar
* `theme` name of a build-in theme from angular-material, one of
  * deeppurple-amber
  * indigo-pink
  * pink-bluegrey
  * purple-green
* `username` the instagram username or account
* `activateLogin` use **true** if a login page should be used, otherwise **false**
* `showLogin` use **true** if the login route should be displayed in the navigation, otherwise **false**, this option is in combination
with `activateLogin`, the login route will be displayed only if both options set to **true**
* `showFeatures` use **true** if the feature routes should be displayed in the navigation, otherwise **false**
* `defaultRoute` the default route after login if no route is stored
