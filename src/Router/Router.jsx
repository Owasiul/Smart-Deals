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
import ProductDetails from "../Components/All_Products/ProductDetails";
import CreateProduct from "../Components/CreateProduct/CreateProduct";
import Loading from "../Components/Loading/Loading";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    HydrateFallback: Loading,
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
    HydrateFallback: Loading,
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
    HydrateFallback: Loading,
    loader: () => fetch("https://smart-deals-server-pi.vercel.app/products"),
  },
  {
    path: "/myproducts",
    HydrateFallback: Loading,
    element: (
      <PrivateRoute>
        <MyProducts />
      </PrivateRoute>
    ),
  },
  {
    path: "/mybids",
    HydrateFallback: Loading,
    element: (
      <PrivateRoute>
        <MyBids />
      </PrivateRoute>
    ),
  },
  {
    path: "/productdetails/:id",
    HydrateFallback: Loading,
    loader: () => fetch(`https://smart-deals-server-pi.vercel.app/products`),
    element: (
      <PrivateRoute>
        <ProductDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/createproduct",
    HydrateFallback: Loading,
    element: (
      <PrivateRoute>
        {" "}
        <CreateProduct></CreateProduct>{" "}
      </PrivateRoute>
    ),
  },
]);
