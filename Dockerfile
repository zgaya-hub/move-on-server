FROM node:16.14.1

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "npm", "run", "start:dev" ]