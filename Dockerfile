# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/share/nginx/portfolio

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run (default for React is 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
