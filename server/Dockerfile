FROM node:lts-slim

RUN npm install -g nodemon

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 5000

# You can change this
CMD [ "npm", "run", "dev" ]