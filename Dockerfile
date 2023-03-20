FROM node:18.14.2-alpine

WORKDIR /app

COPY . /app

RUN npm install --silent

EXPOSE 1234

CMD ["npm", "start"]

