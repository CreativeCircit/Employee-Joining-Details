<<<<<<< HEAD
# Creative Circuit – Backend API Documentation

Enterprise-grade backend built with **Node.js, Express, MongoDB**, and modern security, authentication, and integrations.

---

## 🚀 Overview

This backend powers the **Creative Circuit** platform, handling:

* User authentication (JWT + Google OAuth)
* Lead & application submissions
* Email workflows
* Secure file uploads
* Admin & user profile management

Deployed on **Render** and designed to integrate with a **Next.js (Vercel)** frontend and a **React-based CRM**.

---

## 🧠 Tech Stack (Verified from Codebase)

### Core

* **Node.js** – Runtime
* **Express.js** – Backend framework
* **MongoDB** – Database
* **Mongoose** – ODM

### Security

* Helmet
* CORS
* Express-rate-limit
* Express-mongo-sanitize
* bcrypt / bcryptjs

### Authentication & Sessions

* Passport.js
* passport-google-oauth20
* JSON Web Tokens (JWT)
* cookie-session
* cookie-parser

### File & Media Handling

* Multer – Multipart/form-data handling
* Streamifier – Streaming buffers
* Cloudinary – Media storage

### Email & Automation

* Resend – Primary transactional email service
* Nodemailer – Fallback / traditional SMTP
* @emailjs/nodejs – External email workflows
* Node-cron – Scheduled jobs

### Payments (Configured)

* Stripe
* Razorpay

### Dev & Ops

* Morgan – HTTP logging
* Nodemon – Dev auto-reload
* Axios – HTTP client
* dotenv – Environment variables

---

## 📁 Project Structure

```
backend/
├── server.js            # Entry point
├── src/
│   ├── app.js           # Express app config
│   ├── config/          # DB, Passport, Cloudinary, Resend
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── middlewares/     # Auth & upload middleware
├── package.json
└── .env
```

---

## 🔐 Authentication Flow

* JWT-based auth for protected routes
* Password hashing using bcrypt
* Google OAuth supported via Passport
* Cookies used for session persistence

---

## 📌 API Endpoints

### 👤 User Routes – `/api/users`

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/otp`            | Send OTP for registration        |
| POST   | `/register`       | Register new user                |
| POST   | `/login`          | User login                       |
| POST   | `/logout`         | Logout (Protected)               |
| POST   | `/request-reset`  | Request password reset           |
| PATCH  | `/reset-password` | Reset password                   |
| GET    | `/me`             | Get logged-in user profile       |
| PUT    | `/me`             | Update profile (image supported) |
| GET    | `/all`            | Get all users (Admin)            |

**Example – Register User**

```json
POST /api/users/register
{
  "name": "Harsh",
  "email": "harsh@example.com",
  "password": "StrongPass123"
}
```

---

### 🧾 Applications – `/api/applications`

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| POST   | `/`      | Submit application |

**Input**

```json
{
  "name": "John",
  "email": "john@mail.com",
  "message": "Applying for collaboration"
}
```

---

### 📞 Leads – `/api/leads`

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| POST   | `/`      | Create public lead |

**Input**

```json
{
  "name": "Client Name",
  "email": "client@mail.com",
  "service": "Web Development"
}
```

---

## 🧩 Middlewares

* `protect` – JWT authentication guard
* `uploadMiddleware` – Multer + Cloudinary handling

---

## 🌍 Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
STRIPE_SECRET_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

## 🧪 Run Locally

```bash
npm install
npm run dev
```

---

## ✅ Notes

* Backend is production-ready and secure by default
* Designed for scalability and multi-frontend integration
* Clean separation of concerns (MVC-style)

---

## 👨‍💻 Author

**Harsh Jha**
Full‑Stack Developer
=======
# Creative Circuit – Backend API Documentation

Enterprise-grade backend built with **Node.js, Express, MongoDB**, and modern security, authentication, and integrations.

---

## 🚀 Overview

This backend powers the **Creative Circuit** platform, handling:

* User authentication (JWT + Google OAuth)
* Lead & application submissions
* Email workflows
* Secure file uploads
* Admin & user profile management

Deployed on **Render** and designed to integrate with a **Next.js (Vercel)** frontend and a **React-based CRM**.

---

## 🧠 Tech Stack (Verified from Codebase)

### Core

* **Node.js** – Runtime
* **Express.js** – Backend framework
* **MongoDB** – Database
* **Mongoose** – ODM

### Security

* Helmet
* CORS
* Express-rate-limit
* Express-mongo-sanitize
* bcrypt / bcryptjs

### Authentication & Sessions

* Passport.js
* passport-google-oauth20
* JSON Web Tokens (JWT)
* cookie-session
* cookie-parser

### File & Media Handling

* Multer – Multipart/form-data handling
* Streamifier – Streaming buffers
* Cloudinary – Media storage

### Email & Automation

* Resend – Primary transactional email service
* Nodemailer – Fallback / traditional SMTP
* @emailjs/nodejs – External email workflows
* Node-cron – Scheduled jobs

### Payments (Configured)

* Stripe
* Razorpay

### Dev & Ops

* Morgan – HTTP logging
* Nodemon – Dev auto-reload
* Axios – HTTP client
* dotenv – Environment variables

---

## 📁 Project Structure

```
backend/
├── server.js            # Entry point
├── src/
│   ├── app.js           # Express app config
│   ├── config/          # DB, Passport, Cloudinary, Resend
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── middlewares/     # Auth & upload middleware
├── package.json
└── .env
```

---

## 🔐 Authentication Flow

* JWT-based auth for protected routes
* Password hashing using bcrypt
* Google OAuth supported via Passport
* Cookies used for session persistence

---

## 📌 API Endpoints

### 👤 User Routes – `/api/users`

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/otp`            | Send OTP for registration        |
| POST   | `/register`       | Register new user                |
| POST   | `/login`          | User login                       |
| POST   | `/logout`         | Logout (Protected)               |
| POST   | `/request-reset`  | Request password reset           |
| PATCH  | `/reset-password` | Reset password                   |
| GET    | `/me`             | Get logged-in user profile       |
| PUT    | `/me`             | Update profile (image supported) |
| GET    | `/all`            | Get all users (Admin)            |

**Example – Register User**

```json
POST /api/users/register
{
  "name": "Harsh",
  "email": "harsh@example.com",
  "password": "StrongPass123"
}
```

---

### 🧾 Applications – `/api/applications`

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| POST   | `/`      | Submit application |

**Input**

```json
{
  "name": "John",
  "email": "john@mail.com",
  "message": "Applying for collaboration"
}
```

---

### 📞 Leads – `/api/leads`

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| POST   | `/`      | Create public lead |

**Input**

```json
{
  "name": "Client Name",
  "email": "client@mail.com",
  "service": "Web Development"
}
```

---

## 🧩 Middlewares

* `protect` – JWT authentication guard
* `uploadMiddleware` – Multer + Cloudinary handling

---

## 🌍 Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
STRIPE_SECRET_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

## 🧪 Run Locally

```bash
npm install
npm run dev
```

---

## ✅ Notes

* Backend is production-ready and secure by default
* Designed for scalability and multi-frontend integration
* Clean separation of concerns (MVC-style)

---

## 👨‍💻 Author

**Harsh Jha**
Full‑Stack Developer
>>>>>>> 97d6a8b9c8949fdabad2be4eca703e5ef61b3f65
