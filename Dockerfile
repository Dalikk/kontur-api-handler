FROM node:18.15.0-slim
WORKDIR /app
COPY . .
RUN npm install && npm install ts-node@10.9.1
EXPOSE 3002
CMD npm run start
