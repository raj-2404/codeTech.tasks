# E-Commerce Backend Service

## Overview

This project is a scalable and secure backend service for an E-Commerce application, developed using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It provides RESTful APIs for user authentication, product management, shopping cart operations, and order processing.

The application follows industry best practices such as modular architecture, environment-based configuration, and token-based authentication.

---

## Objectives

- Build a robust backend system for an E-Commerce platform
- Implement secure authentication using JWT
- Provide APIs for managing products, carts, and orders
- Ensure clean and maintainable code structure
- Enable easy integration with frontend applications (Web / Mobile)

---

## Key Features

- User Registration and Authentication (JWT based)
- Role-based access control (Admin / User)
- Product Management APIs
- Shopping Cart Management
- Order Processing System
- MongoDB database integration
- RESTful API architecture
- Environment variable configuration
- API testing support using Postman

---

## Technology Stack

| Layer        | Technology |
|--------------|------------|
| Backend      | Node.js, Express.js |
| Database     | MongoDB (Mongoose) |
| Security     | JWT, Bcrypt |
| Testing Tool | Postman |
| File Upload  | Multer (optional) |

---

## Project Architecture

ecommerce-backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
│
├── routes/
│   ├── auth.js
│   ├── product.js
│   ├── cart.js
│   └── order.js
│
├── middleware/
│   └── authMiddleware.js
│
├── uploads/
│
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

---

### Step 1: Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd ecommerce-backend


⸻

Step 2: Install Dependencies

npm install


⸻

Step 3: Configure Environment Variables

Create a .env file using the provided .env.example file:

cp .env.example .env

Update .env with your configuration:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your_secure_secret_key


⸻

Step 4: Start Server

node server.js

or (development mode):

npm run dev


⸻

API Documentation

Authentication APIs

Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user and generate JWT


⸻

Product APIs

Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/products	Create product (Protected)


⸻

Cart APIs

Method	Endpoint	Description
POST	/api/cart	Add item to cart (Protected)
GET	/api/cart	Retrieve user cart (Protected)


⸻

Order APIs

Method	Endpoint	Description
POST	/api/orders	Place an order (Protected)


⸻

Security Implementation
	•	Password encryption using bcrypt
	•	JWT-based authentication for protected routes
	•	Sensitive credentials managed via .env file
	•	Git ignored files include:
	•	node_modules
	•	.env
	•	uploads

⸻

Testing Strategy

All API endpoints are tested using Postman.

Recommended Testing Flow:
	1.	Register user
	2.	Login user and retrieve JWT token
	3.	Access protected routes using Authorization header
	4.	Perform product, cart, and order operations
	5.	Verify data persistence in MongoDB

⸻

Future Enhancements
	•	Product image upload
	•	Payment gateway integration (Stripe / Razorpay)
	•	Admin dashboard
	•	Order tracking and status management
	•	Product reviews and ratings
	•	Email and notification services
	•	Deployment on cloud infrastructure (AWS / Render / Railway)

⸻

Author

Raj Shaikh
Computer Engineering Student
Savitribai Phule Pune University (SPPU)

⸻

License

This project is developed for academic and internship purposes.
All rights reserved for educational use.



