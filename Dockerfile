FROM node:7.8

WORKDIR /var/www/html

COPY package.json ./
RUN yarn install

COPY . ./

CMD yarn start