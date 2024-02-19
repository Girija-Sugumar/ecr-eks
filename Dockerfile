FROM node:alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4050
CMD [ "node","index.js" ]