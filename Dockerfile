FROM node:14-alpine
WORKDIR /ibicos-frontend
ENV PATH /ibicos-frontend/node_modules/.bin:$PATH
COPY package.json .
COPY yarn.lock .
RUN  apk add --no-cache python2 g++ make\
  && yarn
COPY . .
CMD ["yarn", "start"]
