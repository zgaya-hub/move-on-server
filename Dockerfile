# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of the application code
COPY . .

# Expose the port that your NestJS application will run on
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:dev"]
