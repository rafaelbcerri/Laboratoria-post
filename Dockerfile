FROM node:9.11

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app
