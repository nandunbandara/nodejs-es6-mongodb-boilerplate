FROM node:8.10.0-alpine

WORKDIR /usr/src/app/

COPY package*.json ./
RUN npm install 

COPY . .

ENV PORT=7001

EXPOSE 7001

CMD npm start 