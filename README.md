<h1 align="center">🌐 URL Shortener with Analytics</h1> <h3 align="center">A simple yet powerful URL-shortening service built with Node.js, Express, and MongoDB</h3> <p align="center"> <img src="https://img.shields.io/badge/Node.js-16-green?logo=node.js&style=for-the-badge"/> <img src="https://img.shields.io/badge/Express-4.x-blue?logo=express&style=for-the-badge"/> <img src="https://img.shields.io/badge/MongoDB-5.x-green?logo=mongodb&style=for-the-badge"/> <img src="https://img.shields.io/badge/Mongoose-6.x-red?logo=mongodb&style=for-the-badge"/> </p>
<h2>🚀 Features</h2>
<ul>
    <li>✨ <strong>URL Shortening</strong>: Generate short URLs for any provided long URL.</li>
    <li>🔗 <strong>URL Redirection</strong>: Use the short URL to redirect to the original URL.</li>
    <li>📊 <strong>Analytics</strong>: Track how many times the short URL has been clicked and log the timestamps of each access.</li>
    <li>🌐 <strong>RESTful API</strong>: Provides endpoints for URL shortening, redirection, and analytics.</li>
</ul>
<h2>🛠 Technologies Used</h2>
<p align="left">
    <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
    </a> 
    <strong>Node.js</strong>
    <br><br>
    <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" height="40"/>
    </a> 
    <strong>Express.js</strong>
    <br><br>
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40"/>
    </a> 
    <strong>MongoDB</strong>
    <br><br>
    <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="Mongoose" width="40" height="40"/>
    </a> 
    <strong>Mongoose</strong>
    <br><br>
    <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/>
    </a> 
    <strong>npm</strong>
</p>
<h2>📦 Getting Started</h2>
<p>Follow these instructions to set up the project locally.</p>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (v12+)</li>
    <li>MongoDB (Installed locally or hosted on a cloud service)</li>
    <li>npm (Node Package Manager)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <pre>
        <code>
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
        </code>
    </pre>
    <li><strong>Install the dependencies:</strong></li>
    <pre>
        <code>npm install</code>
    </pre>
    <li><strong>Set up environment variables:</strong></li>
    <p>Create a <code>.env</code> file in the root directory of your project:</p>
    <pre>
        <code>
MONGODB_URI=mongodb://localhost:27017/short-url
PORT=8001
        </code>
    </pre>
    <li><strong>Start the application:</strong></li>
    <pre>
        <code>npm start</code>
    </pre>
</ol>

<p>The server should now be running at <a href="http://localhost:8001" target="_blank">http://localhost:8001</a>.</p>
