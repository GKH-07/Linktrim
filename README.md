URL Shortener with Analytics
A simple URL-shortening service built with Node.js, Express, and MongoDB. This application allows users to:

Generate short URLs for any long URL.
Retrieve the original URL using the short link.
Track analytics on how many times the short URL has been clicked, including the timestamps of each access.
🚀 Features
URL Shortening: Generate a short URL for any provided long URL.
URL Redirection: Use the short URL to redirect to the original URL.
Analytics: Track how many times the short URL has been clicked and log the timestamps of each access.
RESTful API: Exposes REST endpoints for generating short URLs, retrieving the original URL, and accessing analytics data.
🛠 Technologies Used
Node.js: Backend runtime environment.
Express: Web framework for building REST APIs.
MongoDB: Database to store URLs and analytics data.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
shortid: Library to generate short unique IDs.
📝 Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Node.js (v12+)
MongoDB (Installed and running locally or on a cloud service)
npm (Node Package Manager)
📦 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory of your project:
env
Copy code
MONGODB_URI=mongodb://localhost:27017/short-url
PORT=8001
Replace the MONGODB_URI with the URI of your MongoDB instance if it's different.
Start the application:

bash
Copy code
npm start
The server should now be running at http://localhost:8001.

📂 Project Structure
graphql
Copy code
url-shortener/
│
├── controllers/
│   └── url.js          # Contains logic for handling URL generation and analytics
│
├── models/
│   └── url.js          # Mongoose schema for storing URLs and visit history
│
├── routes/
│   └── url.js          # Express routes for URL-related endpoints
│
├── .env                # Environment variables
├── index.js            # Main entry point of the application
└── README.md           # Project documentation

