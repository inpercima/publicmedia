# publicmedia

A tool used to get public data from an instagram account without permission. It gets data a non-logged-in user can see via the public media
address like [https://instagram.com/instagram/media](https://instagram.com/instagram/media). This tool is a testtool to learn more about
angular, typescript and webpack.

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
