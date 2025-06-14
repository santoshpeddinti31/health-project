
# Step1: Build the React App
FROM node:18-alpine

#Set working directory

WORKDIR /App

# Copy package.json and package-lock.json 
COPY package*.json ./

#Install dependencies
RUN npm install 

# Copy the rest of the application 
COPY . .

#Expose the React dev server port 
EXPOSE 5173

#Start the React app
CMD ["npm", "run", "dev", "--", "--host"]
