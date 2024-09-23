import { RouterProvider } from "react-router-dom"
import {  ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme/theme";
import { router } from "./router/router";


function App() {

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
