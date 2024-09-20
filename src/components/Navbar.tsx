import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" color='primary'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="info"
          aria-label="menu"
          sx={{ mt: 2 }}
        >
        </IconButton>
        <Typography variant="h5"  color='secondary' sx={{ flexGrow: 0, mr:5 }}>
          MyStore
        </Typography>
        <Button component={RouterLink} to="/" color="inherit" sx={{ flexGrow: 0 }}>
          Products
        </Button>
        <Button component={RouterLink} to="/add-product" color="inherit" sx={{ flexGrow: 0 }}>
          Add Product
        </Button>
         <Button component={RouterLink} to="/about" color="inherit">
          About
         </Button>
        
      </Toolbar>
    </AppBar>
  </Box>
    </>
  )
}

export default Navbar