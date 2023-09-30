# FROM mongo:latest это в db sercive

FROM node:18-alpine

WORKDIR /app/server

COPY package.json .
COPY package-lock.json .

RUN npm install --silent

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]