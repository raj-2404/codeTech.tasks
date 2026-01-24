# Real-Time Chat Backend Application

This project is a backend for a real-time chat application built using **Node.js**, **Express**, **MongoDB**, and **Socket.IO**.  
It supports user authentication, group chat, private chat, and file uploads.

The backend is designed with a modular and scalable folder structure suitable for real-world applications.

---

## 🚀 Features

- User Registration and Login (JWT Authentication)
- Real-time Group Chat using Socket.IO
- Private One-to-One Chat
- File Upload Support (using Multer)
- REST APIs tested with Postman
- MongoDB for data storage
- Secure environment configuration using `.env`
- Clean and modular project structure
- Test folder for future automated testing

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Socket.IO**
- **JWT (JSON Web Token)**
- **Multer (File Upload)**
- **Postman (API Testing)**

---

## 📂 Project Structure

chat-server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── socket/
├── test/
├── uploads/
├── server.js
├── package.json
├── .gitignore
├── .env.example
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


⸻

2. Install dependencies

npm install


⸻

3. Setup environment variables

Create a .env file using the example file:

cp .env.example .env

Edit .env and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


⸻

4. Run the server

node server.js

or (with nodemon)

npm run dev


⸻

🔑 API Endpoints

Auth Routes
	•	Register User

POST /api/auth/register

	•	Login User

POST /api/auth/login


⸻

Chat Routes
	•	Get chat history

GET /api/chat/:roomId

	•	Upload file

POST /api/chat/upload

(Requires Authorization header with JWT token)

⸻

📡 Socket.IO Events
	•	joinRoom
	•	sendMessage
	•	receiveMessage
	•	privateMessage
	•	privateReceive

⸻

🧪 Testing

APIs can be tested using Postman.
Socket communication can be tested using a Node.js socket client or frontend application.

⸻

🔐 Security
	•	JWT Authentication is used for secure APIs
	•	Environment variables are stored in .env (not pushed to GitHub)
	•	.gitignore is used to exclude:
	•	node_modules
	•	.env
	•	uploads
	•	system files

⸻

📌 Future Improvements
	•	Frontend integration (React / Flutter)
	•	Message encryption
	•	User online/offline status
	•	Typing indicator
	•	Read receipts
	•	Deployment on cloud (Render / Railway / AWS)

⸻

👨‍💻 Author

Raj Shaikh
Computer Engineering Student
SPPU University

⸻

📄 License

This project is for educational and internship purposes.





