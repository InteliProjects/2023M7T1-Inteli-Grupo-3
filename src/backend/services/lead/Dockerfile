FROM node:18.17.0

WORKDIR /app

COPY ./ /app

RUN npm install -g prisma

RUN npm install bcrypt

RUN npm install

RUN prisma generate

CMD ["npm", "start"]
