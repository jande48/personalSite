FROM node:12.10.0

# copy package.json and package-lock.json into /usr/app
RUN mkdir /usr/cache
WORKDIR /usr/cache

#COPY package*.json ./
COPY package.json .

RUN npm install -q
#RUN npm ci -qy

RUN mkdir /usr/app
WORKDIR /usr/app

ENV NODE_PATH=/usr/app/node_modules/.bin
COPY . .

EXPOSE 3000

# start the development server
CMD ["npm", "start"]