# Setting the base to nodejs 8.8.1
FROM node:8.8.1-alpine@sha256:ab9161b1be7ed90f1bcf8d483ef72f138010054732bb12a3288ec679a41f2226

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start