import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <AppBar position="sticky" color='primary'>
    <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <Typography  variant="h5" color='secondary' component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: "none" }}>
        MyStore
      </Typography>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 1 }}>
        <Button component={RouterLink} to="/" color="inherit">
          Catalog
        </Button>
        <Button component={RouterLink} to="/add-product" color="inherit">
          Add Product
        </Button>
        <Button component={RouterLink} to="/about" color="inherit">
          About
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar