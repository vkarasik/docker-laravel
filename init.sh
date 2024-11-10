#!/bin/bash

# Clear app directory
rm -rf src/
echo "App directory cleaned..."
sleep 1

# Install Laravel
composer create-project --prefer-dist laravel/laravel ./src
echo "Laravel installed..."
sleep 1

# Pause execution and ask for changing src/.env
read -p "Adjust src/.env, then type 'done' and press ENTER to continue: " user_input
while [ "$user_input" != "done" ]; do
    read -p "Please type 'done' to continue: " user_input
done
echo "Resuming script..."
sleep 1

# Move nodejs files
cp ./docker/node/bundler/package.json ./src
cp ./docker/node/bundler/gulpfile.js ./src
echo "Files for nodejs moved..."
sleep 1

# Start containers
docker-compose up -d --build
sleep 1

# Run migration on mysql db
docker-compose exec php php artisan migrate
