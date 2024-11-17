import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: ()=> fetch(`/coupons.json`)
        }
      ]
    },
  ]);

export default router;