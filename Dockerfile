FROM node:20-alpine as runner

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY . .

EXPOSE 4200

CMD ["npm", "start"]