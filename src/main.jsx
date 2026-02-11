import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import AuthProvider from "./context/AuthContext.jsx";

AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
