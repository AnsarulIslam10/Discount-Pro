import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage";
import BrandsPage from "../pages/BrandsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../components/BrandDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: '/brand/:id',
          element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
          loader: async({params})=>{
            const res = await fetch("/coupons.json")
            const data = await res.json()
            const singleData = data.find(d=>d._id == params.id)
            return singleData
          }
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