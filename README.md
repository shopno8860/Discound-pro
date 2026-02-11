# Discount PRO - Coupon Collection App

Discount PRO is a modern React application that helps users find and collect discount coupons for popular e-commerce platforms in Bangladesh, such as Daraz, Foodpanda, and Rokomari.

## 🚀 Live Demo

[Add your live deployment link here, e.g., Netlify/Firebase/Vercel]

## ✨ Key Features

- **Featured Banner**: Eye-catching promotional slider using Swiper.js.
- **Top Brands Marquee**: A scrolling marquee showing partner brand logos for quick access.
- **Brands on Sale**: A dedicated section for brands currently offering active discounts.
- **Brand Search**: Easily search through a comprehensive list of partner shops.
- **Secure Authentication**:
  - Email & Password Registration/Login.
  - Google Social Sign-in.
  - Form validation with real-time feedback.
  - Password Reset flow with automated redirection.
- **Private Routes**: Secure access to brand details and coupon collection for registered users.
- **Coupon Clipping**: One-click "Copy Code" feature with `react-copy-to-clipboard` and success toast notifications.
- **User Dashboard**: View and update profile information including display name and photo.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS and DaisyUI.
- **Eye-Candy Animations**: Integrated `AOS` (Animate On Scroll) and `Framer Motion` for a premium user experience.

## 🛠️ Technology Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4 & DaisyUI 5
- **Icons**: Lucide React
- **Authentication**: Firebase Auth
- **Routing**: React Router 7
- **Animations**: AOS, Framer Motion
- **Toasts**: React Hot Toast
- **Slider**: Swiper.js
- **Utility**: CLSX & Tailwind Merge

## 📦 Main Dependencies Used

- `firebase`: Handles all backend authentication logic.
- `react-fast-marquee`: Powering the smooth, high-performance brand logo scroll.
- `react-copy-to-clipboard`: Enables standard clipboard interactions for coupon codes.
- `aos`: Provides lightweight "animate on scroll" effects.
- `framer-motion`: Used for advanced interactive transitions and micro-animations.

## ⚙️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone [your-repo-link]
   cd discount-pro
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your Firebase credentials (see `.env.example`):

   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
