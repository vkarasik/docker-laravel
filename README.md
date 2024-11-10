## About

Docker boilerplate for Laravel project:

- php-fpm
- nginx
- mysql
- redis
- nodejs

Setup service versions and credentials in `.env`

## Semi-manual installation

```shell
# Run and follow instruction
bash init.sh

# If migration failed, run it manually
docker-compose exec php php artisan migrate
```

## Manual installation

### Install Laravel using composer or Laravel installer

```shell
composer create-project --prefer-dist laravel/laravel ./src
```

```shell
# Update php
/bin/bash -c "$(curl -fsSL https://php.new/install/linux)"

#Install Laravel globally
composer global require laravel/installer

# Install project (don't run migrations)
laravel new ./src -f
```

### Adjust and check Laravel `.env` file

```env
# Set name equal to docker .env file
APP_NAME=project_name

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE="${APP_NAME}"
DB_USERNAME=root
DB_PASSWORD=root

CACHE_STORE=redis

REDIS_CLIENT=phpredis
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### Adjust and copy bundler files

For using Gulp or other builder than Vite, adjust or add files in `./docker/node/bundler`. It will replace default package.json and add bundler config files.

```shell
cp ./docker/node/bundler/package.json ./src
cp ./docker/node/bundler/gulpfile.js ./src
```

### Run containers

```shell
docker-compose up -d --build
docker-compose exec php php artisan migrate
```


