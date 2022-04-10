FROM node:17.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
