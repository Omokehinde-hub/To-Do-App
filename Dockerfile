FROM nginx:alpine

# Create and switch to the /app directory
WORKDIR /app

# Copy all contents of the current directory into /app
COPY . .

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
