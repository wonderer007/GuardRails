FROM node:10

WORKDIR /api

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install -g sequelize-cli
RUN npm install

COPY . .

CMD npm start
