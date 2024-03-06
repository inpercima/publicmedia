# publicmedia - docker

This is for managing `php` and `Apache`.

## Getting started

Create an environment file for `docker` and `docker compose` and check the [configuration](#configuration).

```bash
cp default.env .env
```

**Note**: This file will not be under version control but listed in .gitignore.

Check for the existence of `environment.prod.ts` as described in [publicmedia - frontend](./frontend).

Check for the existence of `config.prod.php` as described in [publicmedia - api](./api).

## Configuration

### Table of contents

* [APACHE_PORT](#apache_port)
* [MODE](#mode)

### `APACHE_PORT`

Defines the port for APCHE

* default: `80`
* type: `string`

### `MODE`

Defines the mode using php

* default: `dev`
* type: `string`

### Information

To work with the compose file use following commands.

```bash
# run compose file
docker compose up -d

# stop compose file
docker compose down
```
