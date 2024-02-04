# Use official Node.js image as base image
FROM node:14

# Set environment variables
ENV PORT=3000
ENV SECRET_KEY='your_secret_key'

# Set working directory
WORKDIR /usr/src/app

# Copy packages to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE $PORT

# Command to run the application
CMD [ "npm", "start" ]