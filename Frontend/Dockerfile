# Use the official Node.js 20 image
FROM node:18-alphine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
