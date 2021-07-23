FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN yarn
EXPOSE 3000
CMD ["node", "app.js"]
