FROM node:18-alpine

WORKDIR /app/client

ENV PATH /app/client/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
RUN npm install react-scripts@5.0.1 --silent

COPY . .

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

EXPOSE 3000