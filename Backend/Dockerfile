# Use the official Node.js 20 image
FROM node:20

ARG MONGODB_USERNAME = "dsakethsurya"
ARG MONGODB_PASSWORD = "saketh1234"

# Set the environment variables
ENV MONGODB_USERNAME=$MONGODB_USERNAME
ENV MONGODB_PASSWORD=$MONGODB_PASSWORD

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run your Node.js server
CMD ["node","index.js"]
