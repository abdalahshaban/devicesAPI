# Build off this base image
FROM node:12

# Set up app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

# Bundle app source
COPY . .

# Expose the server to the host machine
EXPOSE 3000

# Run this command on startup
CMD ["pm2-docker", "start", "process.json"]