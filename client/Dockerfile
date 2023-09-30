FROM node:18-alpine

WORKDIR /app/client

# Ну короче, я думаю пока что проблема в том что докер пытается там в модулях сосдавать симлинки, но сосёт яйца,
# поэтому обычно люди и добавляют в PATH .bin файл. Так что получается надо либо разрешить / запретить это дело, либо указывать ссылку
# (что нахуй ломает саму суть контйнеризации), либо 

#i/o error in mounted directory docker

ENV PATH /app/client/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . .

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

EXPOSE 3000