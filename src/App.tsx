import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ebf1f2',
      },
      secondary: {
        main: '#657efc',
      },
    },
  });

  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
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
        }
      ]
    }])

  return (
    <>
     <div className="app">
     <ThemeProvider theme={theme}>
      <div className="container">
        <RouterProvider router={router}/>
      </div>
      </ThemeProvider>
    </div>
    </>
  )
}

export default App
