# Use the official Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend source code
COPY . .

# Expose port
EXPOSE 8080

# Command to run your Node.js serve
ENTRYPOINT ["node","index.js"]
