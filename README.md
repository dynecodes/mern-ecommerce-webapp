<<<<<<< HEAD
# E-Commerce React Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
This project is a fully functional e-commerce platform built with React.js. It encompasses a modern, responsive design, user authentication, product browsing, shopping cart management, and order processing. The goal is to provide a seamless shopping experience for users and an easy-to-maintain codebase for developers.

---

## Features
- User Authentication: Sign up, login, logout
- Product Browsing: View categories, product details
- Shopping Cart: Add/remove products, view cart, checkout
- Admin Panel: Manage products, categories, orders (if applicable)
- Responsive Design: Mobile and desktop-friendly
- State Management: Utilizing React hooks and context API 
- API Integration: Connects with backend services for data fetching

---

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

--
=======
#  🔗 Live Demo
 Live Site admin:  [https://mern-ecommerce-webapp-admin.onrender.com]

 Live Site frontend: [https://mern-ecommerce-webapp-front-end.onrender.com]

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or Yarn) installed  
- MongoDB instance (local or cloud, e.g. MongoDB Atlas)  
- (Optional) Environment variables for keys / secrets  

### Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/dynecodes/mern-ecommerce-webapp.git
   cd mern-ecommerce-webapp
## Backend setup
cd back-end
npm install
cp .env.example .env
# Fill in appropriate values in .env (DB URI, JWT secret, etc.)
npm start

## Frontend setup
Open another terminal window/tab:
cd front-end
npm install
npm start
Visit http://localhost:3000 (or whatever ports are set) to see the app


⚙ Usage

Users can browse products, add to cart, and checkout

Admins can log in to dashboard to manage products & orders

Ensure you handle environment variables securely in production

🧑‍💻 Contributing

Contributions are welcome! If you find bugs or want to add features:

Fork the repository

Create a new branch: git checkout -b my-feature

Make your changes & test locally

Commit & push: git push origin my-feature

Open a Pull Request

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 537eb9e0c6ec45c4ca22033f177a8e97dd45fddf
