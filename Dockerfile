FROM node:18.14.2-alpine

WORKDIR /app

COPY . /app

RUN npm install --silent

RUN npm run build

EXPOSE 1234

CMD ["npm", "start"]

