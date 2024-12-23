# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /usr/src/nestjs-api-demo

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
