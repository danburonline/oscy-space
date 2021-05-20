# Base image setup
FROM node:14.15.4-alpine

# Create and change to the app directory
WORKDIR /usr/app

# Copy application dependency manifests to the container image
COPY . .

# Install production dependencies
RUN yarn

# Copy local code to the container image
RUN yarn build

# Run the web service on container startup
CMD [ "yarn", "start" ]