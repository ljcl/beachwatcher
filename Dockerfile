FROM node:alpine
MAINTAINER Luke Clark <luke@lukeclark.com.au>

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache make gcc g++ python tzdata && \
  mkdir /usr/src/app/output && \
  cp /usr/share/zoneinfo/Australia/Sydney /etc/localtime && \
  echo "Australia/Sydney" > /etc/timezone && \
  npm install --production --silent && \
  apk del make gcc g++ python tzdata && rm -rf /var/cache/apk/*

COPY . .

CMD [ "npm", "start" ]
