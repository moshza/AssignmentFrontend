import { Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet/>
      </Box>
      <Footer/>
    </Box>
    )
  }