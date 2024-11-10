FROM node:alpine

WORKDIR /var/www/html

# Используем gulp вместо vite
COPY ./docker/node/bundler/* ./

RUN npm install

# Выполняем команду от имени пользователя с UID пользователя WSL
USER node

CMD ["npm", "run", "watch"]
