FROM node:alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "start"]
