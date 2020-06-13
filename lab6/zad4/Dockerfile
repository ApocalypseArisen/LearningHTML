FROM node:alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
CMD [ "node", "src/index.js" ]
EXPOSE 8080:8080
