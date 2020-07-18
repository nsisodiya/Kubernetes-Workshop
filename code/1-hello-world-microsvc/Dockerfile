FROM node:14.5.0-alpine

WORKDIR /opt/nodeapp
RUN npm install pm2 -g

RUN apk add --no-cache curl

COPY package*.json ./

RUN npm ci --production
COPY . .
EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]