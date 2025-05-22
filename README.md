# PRODIGY_WD_01 - Secure User Authentication System

This is **Task 01** of the Full Stack Web Development Internship at **Prodigy Infotech**.

## 🔐 Task Overview

Develop a **secure user authentication system** using the MERN stack (MongoDB, Express.js, React, Node.js).

### ✅ Key Requirements from Prodigy Infotech:
- Allow users to **register** and **log in** securely.
- Restrict access to protected routes unless the user is authenticated.
- Use standard mechanisms like **password hashing**, **JWT**, and **role-based access** (optional).

## 🧠 Features Implemented

- 🔐 **User Registration Page** — New users can create an account.
- 🔑 **Login Page** — Existing users can securely log in.
- 📄 **Dashboard Page** — Protected route; accessible only after login.
- 🧂 **Password Encryption** — Implemented using **Bcrypt**.
- 🔒 **Route Protection** — Dashboard route is secured via **JWT token authentication**.
- 🚪 **Logout Functionality** — Users can securely log out from the dashboard.
- ✅ **Responsive UI** with a clean and minimal design.

## 🛠️ Tech Stack Used

- **Frontend**: React (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: Bcrypt for hashing, JWT for token-based authentication

## 📁 Folder Structure

<img width="218" alt="{B0CD3267-467A-4FC6-9F66-CA61B95BCFDE}" src="https://github.com/user-attachments/assets/e7a055b2-7107-4378-af98-b3dc9c9712d7" />

## 🚀 Getting Started

### 1. Clone the Repository
https://github.com/Mdraza78/PRODIGY_FS_01.git

### 2. Backend Setup
```markdown
- cd backend
- npm install
- npm start
```
### 3. Frontend Setup
```markdown
- cd frontend
- npm install
- npm run dev
```

### 4. Create an `.env` file in the `backend/` directory with the following variables:
```markdown
- MONGO_URI=mongodb://127.0.0.1:27017/authdb
- JWT_SECRET=your_jwt_secret_key
```

## 📄 License
This project is developed as part of Prodigy Infotech Internship and is intended for educational use.

Developed by Md Raza

