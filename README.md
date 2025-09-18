
## E-Commerce Web App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)


## Introduction
An e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js) that provides shopping functionality, user authentication, order management, and an admin dashboard.  

## Features
- User Authentication: Sign up, login, logout
- Product Browsing: View categories, product details
- Shopping Cart: Add/remove products, view cart, checkout
- Admin Panel: Manage products, categories, orders (if applicable)
- Responsive Design: Mobile and desktop-friendly
- State Management: Utilizing React hooks and context API 
- API Integration: Connects with backend services for data fetching

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js + Express |
| Database | MongoDB |
| Frontend | React.js |
| State Management | Context API / Redux (if used) |
| HTTP / APIs | RESTful APIs via Axios or Fetch |
| Authentication | JWT or session cookies |
| Styling | CSS / SCSS / styled-components (or CSS framework) |


## 📂 Project Structure
1. Clone the repo  
   ```bash
   mern-ecommerce-webapp:
    back-end: # Server code (Express, MongoDB)
      models: # Database schemas
      routes: # API routes
      controllers: # Business logic
      middleware: # Auth, error handling, etc.
      config: # DB connection, environment variables
      server.js: # Entry point for backend
    front-end: # React client application
      src:
        components: # Reusable UI components
        pages: # Page components / routes
        services: # API calls
        context: # State management
        styles: # CSS / SCSS files
        App.js: # Main React app setup
    README.md: ""
    .env.example: # Example environment variable file
    package.json: ""
    yarn.lock: ""
  

##  🔗 Live Demo
 Live Site admin:  [https://mern-ecommerce-webapp-admin.onrender.com]
 
 Live Site frontend: [https://mern-ecommerce-webapp-front-end.onrender.com]


# Prerequisites
- Node.js and npm (or Yarn) installed  
- MongoDB instance (local or cloud, e.g. MongoDB Atlas)  
- (Optional) Environment variables for keys / secrets  


## Setup Instructions
1. Clone the repo  
   ```bash
   git clone https://github.com/dynecodes/mern-ecommerce-webapp.git
   cd mern-ecommerce-webapp
   
# Backend setup
cd back-end
npm install
cp .env.example .env
Fill in appropriate values in .env (DB URI, JWT secret, etc.)
npm start

# Frontend setup
Open another terminal window/tab:
cd front-end
npm install
npm start
Visit http://localhost: (or whatever ports are set) to see the app


## ⚙ Usage
- Users can browse products, add to cart, and checkout
- Admins can log in to dashboard to manage products & orders
- Ensure you handle environment variables securely in production

## 🧑‍💻 Contributing

Contributions are welcome! If you find bugs or want to add features:

- Fork the repository
- Create a new branch: git checkout -b my-feature
- Make your changes & test locally
- Commit & push: git push origin my-feature
- Open a Pull Request

