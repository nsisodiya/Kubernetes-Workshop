FROM node:14.5.0-alpine

WORKDIR /opt/nodeapp
RUN npm install pm2 -g

COPY package*.json ./

RUN npm ci --production
COPY . .
EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]