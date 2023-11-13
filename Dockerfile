FROM node:16.14

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "npm", "run", "start:dev" ]