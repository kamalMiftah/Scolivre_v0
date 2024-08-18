# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
