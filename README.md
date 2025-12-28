# Task Collaboration Platform (MERN Stack)

A scalable task collaboration platform built using the MERN stack, focusing on authentication, role-based access control, real-time updates, and backend architecture.

---

## 🚀 Tech Stack

**Frontend**
- React.js (Hooks, Axios)
- Context API for state management

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.io for real-time updates

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control:
  - **Admin**: Full access
  - **Manager**: Create and assign tasks
  - **Developer**: View and update assigned tasks only

- Protected routes using middleware
- Token validation on every secured API

---

## 📋 Task Management

- Create, update, delete tasks
- Task fields:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Status (Todo / In Progress / Blocked / Done)
  - Assigned User
  - Due Date

- Backend validation for task status transitions

---

## 🔄 Real-Time Features

- Implemented Socket.io
- Real-time updates when tasks are:
  - Created
  - Updated
  - Reassigned

---

## ⚡ Performance & Scalability

- Pagination and filtering on task lists
- MongoDB indexes applied on:
  - Assigned user
  - Task status
  - Priority

These indexes improve query performance as task volume increases.

---

## 🔒 Security Considerations

- Input validation on backend
- JWT verification middleware
- Role-based route protection
- Unauthorized access prevention

---

## 🧠 Architectural Decisions

- Modular backend structure (controllers, routes, middleware)
- Separation of concerns for scalability
- Reusable middleware for auth and roles

---

## 🤖 Use of AI Tools

AI tools were used to:
- Speed up boilerplate generation
- Validate logic and edge cases

All generated code was reviewed, tested, and adapted to fit the project architecture.

---

## 📈 Future Improvements

- Redis for caching
- Message queue for real-time scalability
- Microservices for large-scale user base (100k+ users)
- Better UI/UX and notifications

---

## ⚙️ Setup Instructions

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start
