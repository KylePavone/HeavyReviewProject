FROM node:18.10.0-bullseye-slim

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .
ADD package.json /usr/src/app/package.json
RUN npm install