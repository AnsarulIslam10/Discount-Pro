import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage";
import BrandsPage from "../pages/BrandsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: ()=> fetch(`/coupons.json`)
        },
        {
            path: '/brands',
            element: <BrandsPage></BrandsPage>,
            loader: ()=> fetch(`/coupons.json`)
        },
        {
          path: '/my-profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        }
      ]
    },
  ]);

export default router;