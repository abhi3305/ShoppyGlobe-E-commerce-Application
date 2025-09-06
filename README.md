# ShoppyGlobe E-commerce Application

ShoppyGlobe is a basic **React-based E-commerce application** designed to showcase products, allow users to add items to a shopping cart, and navigate through product details and checkout. This project demonstrates React components, Redux for state management, React Router for navigation, and responsive design.

---


## Demo

Frontend: http://localhost:5173/

Backend API: http://localhost:8000/api

---

## Features

## Frontend

- Display products in a responsive ProductList.

- View detailed product info in ProductDetail.

- Add/remove products from Cart with quantity tracking.

- Show total cart items in the Navbar.

- Proceed to Checkout page with product summary.

- Search products using a search bar.

- Lazy loading components for performance.

- Fully responsive UI (mobile/tablet/desktop).

---

## Backend

- RESTful API built with Node.js and Express.

- MongoDB database stores Products and Cart items.

- JWT-based authentication and authorization.

- Protected cart routes accessible only by logged-in users.

- Full CRUD operations on products and cart items.

- Error handling & validation for invalid product/cart IDs or input data.

## Technologies Used

- Frontend: React, Redux Toolkit, React Router DOM, Vite, CSS/Flexbox/Grid

- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

- Tools: ThunderClient/Postman for API testing 

---

## Folder Structure

- Frontend:

src/
├── assets/             # Product images
├── components/         # Reusable UI components
├── pages/              # Pages (Home, Checkout, SearchResults)
├── redux/              # Redux store and slices
├── styles/             # CSS files
├── utils/              # Mock data and helper functions
├── App.jsx
└── main.jsx


- Backend:

backend/
├── models/             # Mongoose models (Product.js, Cart.js, User.js)
├── routes/             # Express routes (auth.js, products.js, cart.js)
├── middleware/         # Middleware (auth.js, errorHandler.js)
├── utils/              # Seed scripts for database
├── server.js           # Main Express server
├── package.json
└── .env                # Environment variables


---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  
- MongoDB (for database)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/abhi3305/ShoppyGlobe-E-commerce-Application.git
cd Shoppy-globe


### Install dependencies:

npm install

### Seed MongoDB with mock products:

npm run seed

### Start backend server:

npm start

### Start the frontend server:

npm run dev


Open your browser at 

Frontend: http://localhost:5173/
Backend API: http://localhost:8000/api


### API Endpoints

Authentication

POST /api/auth/register → Register a new user

POST /api/auth/login → Login user, receive JWT token

Products

GET /api/products → Fetch all products

GET /api/products/:id → Fetch product by ID

Cart (Protected Routes – JWT required)

POST /api/cart → Add product to cart

GET /api/cart → Get current user's cart

PUT /api/cart/:id → Update cart item quantity

DELETE /api/cart/:id → Remove product from cart

### Error Handling

Invalid product/cart IDs return:

{ "error": "Product not found" }

Unauthorized access to protected routes returns:

{ "error": "No token provided" }


### Testing

Use ThunderClient or Postman to test all backend routes.

Ensure error handling works by sending invalid IDs or missing JWT.

Take screenshots for submission.