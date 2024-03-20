# Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port used by Vite (default port is 3000)
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]