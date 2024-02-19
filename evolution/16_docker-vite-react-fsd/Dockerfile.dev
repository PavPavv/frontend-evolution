FROM node:18.13.0-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

ENV REACT_APP_NAME=myName

CMD [ "npm", "run", "dev" ]