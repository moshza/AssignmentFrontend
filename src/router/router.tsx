import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import EditProduct from "../pages/EditProduct";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import { Layout } from "../layout/layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products/:id",
          element: <ProductDetails/>
        },
        {
          path: "/add-product",
          element: <AddProduct/>
        },
        {
          path: "/update-product/:id",
          element: <EditProduct/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: '*',
          element: <ErrorMessage message={'Page not found'} />,
        },
      ]
    }])
