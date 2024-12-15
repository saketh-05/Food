# Use the official Node.js 20 image
FROM node:alpine3.18 as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

RUN npm run build

# Expose port 
FROM nginx:stable-alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm -rf *

# Expose port 80 and start nginx
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
