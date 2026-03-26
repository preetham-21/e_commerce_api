# 🛒 E-Commerce Dashboard (TypeScript + React)

## 📌 Project Overview

This project is a **frontend-based E-Commerce Dashboard** built using **React with TypeScript**.
It integrates with the **FakeStore API** to perform product operations and includes a basic **authentication system using LocalStorage**.

The application demonstrates core frontend concepts like routing, state management, API integration, and CRUD operations.

---

## 🚀 Features

* 🔐 User Authentication (Register & Login using LocalStorage)
* 📄 Landing Page (Register / Login)
* 📊 Dashboard after successful login
* 📦 View Products (GET API)
* ➕ Add Product (POST API)
* ❌ Delete Product (DELETE API)
* 🔀 Navigation using React Router

---

## 🛠️ Tech Stack

* **Frontend:** React (TypeScript)
* **Routing:** React Router DOM
* **HTTP Client:** Axios
* **API:** FakeStore API

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   ├── ProductList.tsx
│   ├── AddProduct.tsx
│
├── services/
│   ├── api.ts
│   ├── auth.ts
│
├── App.tsx
├── index.tsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd ecommerce-dashboard
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the application

```
npm start
```

### 4️⃣ Open in browser

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

* User registers using email and password
* Data is stored in **LocalStorage**
* User logs in using same credentials
* On successful login → redirected to Dashboard
* Login state is maintained using LocalStorage

---

## 🔄 Application Flow

1. Open application → Register page
2. Register a new user
3. Navigate to Login page
4. Login with credentials
5. Redirect to Dashboard
6. View product list (Fetched from API)
7. Add new product
8. Delete existing product

## 🌐 API Endpoints Used

* GET Products
  `https://fakestoreapi.com/products`

* POST Product
  `https://fakestoreapi.com/products`

* DELETE Product
  `https://fakestoreapi.com/products/{id}`

## ⚠️ Notes

* This project uses **FakeStore API**, so data persistence is temporary.
* Authentication is handled using **LocalStorage (not secure for production)**.
* No backend/database is used in this project.

## 🚧 Future Enhancements

* ✏️ Edit/Update Product feature
* 🔒 Protected Routes (Authentication Guard)
* 🔑 JWT-based Authentication
* 🎨 Advanced UI (Bootstrap / Tailwind)
* 🔍 Search & Filter functionality

## 👨‍💻 Author

Developed by **Sai Preetham Medidi**

---
