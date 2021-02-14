# publicmedia - api

## Getting started

```bash
# all commands used in ./api
cd api
```

Create config files for `devMode` and `prodMode`.

```bash
cp config/config.default.php config/config.dev.php
cp config/config.default.php config/config.prod.php
```

**Note**: This file will not be under version control but listed in .gitignore.

## Configuration

### Table of contents

* [USER_ID](#USERID)
* [USERNAME](#USERNAME)

### `USER_ID`

Defines the user id to check against instagram.

* default: `25025320`
* type: `string`

### `USERNAME`

Defines the user name to check against instagram.

* default: `instagram`
* type: `string`
