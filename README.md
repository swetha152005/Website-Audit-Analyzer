# 🚀 PagePulse - Website Audit Tool

A web-based website auditing tool that analyzes website performance, SEO structure, and accessibility metrics instantly.

## ✨ Features

- 🌐 Website availability checking
- ⚡ Response time analysis
- 📄 Page title extraction
- 🔍 H1 heading analysis
- 🖼 Missing image ALT detection
- 📝 Website word count analysis
- 📋 JSON report copy feature


## 🛠 Tech Stack

### Frontend
- React.js
- CSS3
- Vite

### Backend
- Node.js
- Express.js

### Libraries
- Axios
- Cheerio
- CORS


## 📂 Project Structure
PagePulse
│
├── client
│ ├── src
│ └── React Application
│
├── server
│ ├── routes
│ ├── controllers
│ └── utils
│
└── README.md

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <your-repository-url>

cd Page-Pulse

2. Backend Setup

cd server
npm install
node index.js

Backend will run on:

http://localhost:5000

3. Frontend Setup

cd client
npm install
npm run dev

🔗 API Endpoint
Analyze Website

POST

http://localhost:5000/api/audit
Request Body
{
  "url": "https://www.google.com"
}
Response Example
{
  "url": "https://www.google.com",
  "statusCode": 200,
  "responseTime": "507 ms",
  "title": "Google",
  "metaDescription": "No description",
  "h1Count": 0,
  "imagesWithoutAlt": 0,
  "wordCount": 358
}

## 📸 Screenshots

### Homepage

![Homepage](screenshots/homepage.png)


### Website Audit Report
![Audit Result](screenshots/audit-result.png)

