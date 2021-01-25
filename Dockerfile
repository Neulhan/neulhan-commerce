FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . /app

RUN npm install --dev && npm run build

CMD [ "npm", "start" ]
