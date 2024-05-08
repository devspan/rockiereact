# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV production

# Serve the app using a simple Node.js server, such as serve
# Note: You might need to install 'serve' if not already installed:
# RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
