# publicmedia - api

## Getting started

```bash
# all commands used in ./api
cd api
```

Create config files for `devMode` and `prodMode`.

```bash
cp src/main/config.default.php src/main/config.dev.php
cp src/main/config.default.php src/main/config.prod.php
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
