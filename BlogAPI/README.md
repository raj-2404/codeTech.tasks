# Blog Backend System

A RESTful API built with **Express.js** and **MySQL** that handles user authentication, blog management, and commenting systems.

## 🛠️ Tech Stack
- **Node.js & Express.js**
- **MySQL** (Relational Database)
- **JWT** (JSON Web Tokens for Security)
- **BcryptJS** (Password Encryption)

## ⚙️ Features
1. **User Auth:** Register & Login with hashed passwords.
2. **Blog Management:** Create, Read, and View specific blogs.
3. **Comments:** Users can comment on blogs.
4. **Security:** Protected routes using JWT Middleware.

## 🚀 How to Run Locally

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/pragyan-tech/CodTech-Internship.git
   cd CodTech-Internship/Task1-BlogAPI

2. **Install Dependencies:**
   ```bash
   npm install

3. **Database Setup:**
   - Create a database named `blog_db` in MySQL.
   - Run the SQL commands found in `database_schema.sql`.

4. **Configuration:**
   - Create a `.env` file in the root folder.
   - Add your database credentials:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASS=your_password
     DB_NAME=blog_db
     JWT_SECRET=secret_key
     ```

5. **Start Server:**
   ```bash
   npm start

## 🧪 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive Token |
| GET | `/blogs` | Get all blogs |
| POST | `/blogs` | Create a blog (Requires Token) |
| POST | `/blogs/:id/comments` | Add comment (Requires Token) |
