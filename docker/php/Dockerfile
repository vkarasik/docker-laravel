ARG PHP_VERSION
FROM php:${PHP_VERSION}-fpm-alpine

# Install required packages
RUN apk add --no-cache --update \
    autoconf \
    g++ \
    make \
    linux-headers \
    zlib-dev \
    libtool \
    nano \
    curl \
    zip

# Install and enable Xdebug
ARG XDEBUG_VERSION=latest
RUN pecl install xdebug-${XDEBUG_VERSION} && docker-php-ext-enable xdebug

# Install and enable Redis
RUN pecl install redis && docker-php-ext-enable redis

# Install and enable mysql tools
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN mkdir -p /var/www/html && chown www-data:www-data /var/www/html

# Set user in container equal to wsl
ARG UID=1000
ARG GID=1000
RUN addgroup -g $GID vadim && adduser -u $UID -G vadim -s /bin/sh -D vadim
USER vadim

WORKDIR /var/www/html
