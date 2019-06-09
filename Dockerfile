FROM node:8.10.0-alpine as builder

WORKDIR /usr/src/app/

COPY package*.json ./
RUN npm install 

COPY . .

RUN npm run build-prod

FROM node:8.10.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY --from=builder /usr/src/app/dist/index.bundle.js .

ENV PORT=7001

EXPOSE 7001

CMD npm start 