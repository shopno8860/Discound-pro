# 🎫 Discount PRO

**Discount PRO** is a premium, high-performance coupon collection platform built for the modern web. It enables users to browse, search, and collect exclusive discounts from the most popular brands in Bangladesh, featuring a seamless user experience, secure authentication, and a stunning dark/light interface.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://discount-pro-ac945.web.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

---

## ✨ Key Features

### 🚀 Performance & UI

- **Modern Dashboard**: Clean, professional layout with a focus on usability.
- **Dynamic Theming**: Instant Dark/Light mode toggle with persistence using `localStorage`.
- **Interactive Carousel**: Smooth promotional banner powered by **Swiper.js**.
- **Brand Marquee**: High-performance scrolling loop for partner brand logos.
- **Micro-Animations**: Elegant entrance and hover effects using **AOS** and **Framer Motion**.

### 🔐 Security & Auth

- **Robust Authentication**: Powered by **Firebase Auth** (Email/Password & Google Login).
- **Secure Profile**: Dedicated user profile with real-time metadata updates.
- **Private Routes**: Protected brand details and coupon access logic.
- **Password Recovery**: Automated forgot-password flow with direct email redirection.

### 🏷️ Coupon System

- **Intelligent Search**: Real-time filtering for brand discovery.
- **One-Click Clipping**: Native Clipboard API integration for instant coupon copying.
- **Success Toasts**: Real-time user feedback via **React Hot Toast**.
- **Mobile Responsive**: Fully optimized for every device size, from mobile to ultra-wide.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/)
- **State & Logic**: Context API + Hooks
- **Backend Services**: [Firebase](https://firebase.google.com/) (Auth & Hosting)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [AOS](https://michalsnik.github.io/aos/)

---

## 📦 Installation & Setup

### 1. Prerequisite

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone & Install

```bash
git clone https://github.com/shopno8860/Discound-pro.git
cd discount-pro
npm install --legacy-peer-deps
```

### 3. Environment Configuration

Create a `.env` file in the root directory and populate it with your Firebase configuration:

```env
VITE_apiKey=your_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.firebasestorage.app
VITE_messagingSenderId=your_id
VITE_appId=your_app_id
```

### 4. Launch

```bash
# Development mode
npm run dev

# Production build
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/   # Reusable UI components (Navbar, Footer, Cards)
├── context/      # AuthContext for global state
├── data/         # Mock data for brands (JSON)
├── layouts/      # Main application structure
├── pages/        # Route components (Home, Login, BrandDetails, etc.)
├── routes/       # Private and Public routing logic
└── utils/        # Firebase initialization and helpers
```

---

## 📝 Author

**Shopno**

- GitHub: [@shopno8860](https://github.com/shopno8860)
- LinkedIn: [Rakesh Al Yadin](https://www.linkedin.com/in/rakesh-al-yadin)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
