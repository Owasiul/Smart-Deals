import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Auth from "../Auth/Auth";
import MyProducts from "../Components/My_Products/MyProducts";
import MyBids from "../Components/My_Bids/MyBids";
import AllProducts from "../Components/All_Products/AllProducts";
import PrivateRoute from "../Context/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/allproducts",
    Component: AllProducts,
    loader: () => fetch('http://localhost:3000/products'),
  },
  {
    path: "/myproducts",
    element: (
      <PrivateRoute>
        <MyProducts />
      </PrivateRoute>
    ),
  },
  {
    path: "/mybids",
    element: (
      <PrivateRoute>
        <MyBids />
      </PrivateRoute>
    ),
  },
]);
