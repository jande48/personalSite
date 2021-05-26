# build environment
FROM node:12.2.0-alpine as build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node:10.15.2-alpine
# RUN mkdir /frontend
# WORKDIR /frontend
# # COPY package.json /frontend/package.json
# # RUN npm install
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install
# COPY . ./

# EXPOSE 3000
# CMD ["npm", "start"]