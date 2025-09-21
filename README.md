# 💍 Jewellery Store — Fullstack online jewellery store

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)  
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)  
![Express](https://img.shields.io/badge/Express.js-4.x-green?style=flat-square)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?style=flat-square&logo=mongodb)  
![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass)  
![Zustand](https://img.shields.io/badge/Zustand-Global%20State-orange?style=flat-square)  
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

## 📖 Description
**Jewellery Store** is a fully functional full-stack online jewellery store.  
The project is implemented in **React (TypeScript) + Express + MongoDB** and includes authorisation via JWT and cookies, a shopping cart, a blog with comments, product filtering, and responsive design.

## ✨ Main functionality
- 🔐 Registration and login (JWT + cookies)
- 🛒 Shopping cart (zustand + global context)
- 📦 Product viewing, filtering, sorting
- 💬 Comments on products and blog posts  
- 📰 Blog: articles + comment system  
- 🔑 Password reset (frontend page)  
- 📱 Fully responsive UI (SCSS modules + MUI)  
- 🎞️ Slider on the home page  

---

## 
## 🛠️ Technologies
- **Frontend**: React 19, TypeScript, React Router DOM 7, Zustand, React Hook Form, SCSS Modules, MUI, Swiper, Vite  
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT (cookie-based authentication), Middlewares  
- **Architecture**:  
  - Frontend: `api`, `app`, `assets`, `components`, `context`, `hooks`, `layout`, `pages`, `sections`, `store`, `styles`, `types`, `widgets`  
  - Backend: `config`, `controllers`, `middlewares`, `models`, `routes`  

---

## 🚀 Deployment
- 🌐 Client (Vercel): [Link to website](https://jewelry-store-iota.vercel.app/)  

---

## 📷 Screenshots
![Screenshot of the interface](https://res.cloudinary.com/dqelst5rc/image/upload/v1758490980/Screenshot_2025-09-22_004224_csyygv.png)

![Screenshot of the interface](https://res.cloudinary.com/dqelst5rc/image/upload/v1758490978/Screenshot_2025-09-22_004246_c5jukh.png)

![Screenshot of the user interface](https://res.cloudinary.com/dqelst5rc/image/upload/v1758490923/Screenshot_2025-09-22_002752_dd046i.png)

---

## 📡 API endpoints (main)
```http
POST   /api/auth/register         # registration
POST   /api/auth/login            # login
GET    /api/products              # list of products
GET    /api/products/:id          # product by id
POST   /api/products/:id/comments # comment on product
GET    /api/blog                  # list of posts
GET    /api/blog/:id              # post with comments
POST   /api/blog/:id/comments     # comment on post🛠️ Technologies
- **Frontend**: React 19, TypeScript, React Router DOM 7, Zustand, React Hook Form, SCSS Modules, MUI, Swiper, Vite  
- **Backend**:
