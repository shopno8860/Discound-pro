import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import BrandDetails from "../pages/BrandDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";
import AboutDev from "../pages/AboutDev";
import ErrorPage from "../pages/ErrorPage";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/about-dev",
        element: <AboutDev />,
      },
    ],
  },
]);

export default router;
