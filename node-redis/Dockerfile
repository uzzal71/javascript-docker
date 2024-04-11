FROM node:21.7.2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY example.env /usr/src/app/.env
EXPOSE 3000
CMD [ "npm", "run","dev" ]

