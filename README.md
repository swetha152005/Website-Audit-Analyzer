# Website Audit Analyzer (Page Pulse)

A simple web application that audits any website URL and returns important SEO and page statistics. The project consists of a Node.js/Express backend API and a React frontend.

## Live Demo

**Frontend:** https://website-audit-analyzer.vercel.app

**Backend API:** https://website-audit-analyzer-production.up.railway.app

## Features

* Analyze any valid website URL
* Returns HTTP Status Code
* Measures Response Time
* Extracts Page Title
* Extracts Meta Description
* Counts H1 Tags
* Counts Images Missing ALT Text
* Calculates Approximate Word Count
* Handles Invalid URLs
* Handles Timeout Errors
* Handles Non-HTML Responses

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js
* Axios
* Cheerio

### Deployment

* Frontend: Vercel
* Backend: Railway

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
cd Website-Audit-Analyzer
```

## Backend

```bash
cd server
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

## Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Contract

## Endpoint

```
POST /api/audit
```

### Request Body

```json
{
  "url": "https://google.com"
}
```

### Success Response

```json
{
  "url": "https://google.com",
  "statusCode": 200,
  "responseTime": "320 ms",
  "title": "Google",
  "metaDescription": "...",
  "h1Count": 1,
  "imagesWithoutAlt": 0,
  "wordCount": 350
}
```

### Error Responses

* Invalid URL
* Request Timeout
* Non-HTML Content
* Internal Server Error

---

# Testing

Run the backend tests:

```bash
cd server
npm test
```

The test suite includes:

* Happy Path
* Non-HTML Response
* Timeout Handling

---

# Design Decisions

### 1. Express + React Architecture

I separated the frontend and backend to keep the API reusable and the UI independent.

### 2. Axios + Cheerio

Axios is used to fetch webpages while Cheerio efficiently parses HTML without requiring a browser engine.

### 3. Error Handling

Instead of allowing the application to crash, invalid URLs, timeout errors, and non-HTML responses return meaningful error messages to improve reliability and user experience.

---

# AI Usage

I used ChatGPT to speed up development, understand deployment, improve the test cases, and refine the project documentation. After using AI suggestions, I verified the implementation myself, integrated the code into my own project structure, tested the application, fixed deployment issues, and made changes where necessary to ensure the final submission worked correctly.

---

# Author

Swetha Marirajan

Built for Digital Heroes Training Task
