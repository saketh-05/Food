# Use the official Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

# Expose port 3333
EXPOSE 5173

# Command to run the React development server
CMD ["npm", "run", "dev"]
