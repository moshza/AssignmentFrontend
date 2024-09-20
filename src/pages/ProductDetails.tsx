import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Product } from "../interfaces/Product";


const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  },[]);
  
  return (
    <>
      {product && (
        <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '16px', boxShadow: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                width: { xs: '100%', md: '400px' },
                height: 'auto',
                borderRadius: 2,
                objectFit: 'contain',
              }}
            />
            <CardContent sx={{ flex: 1, paddingLeft: { xs: '0', md: '16px' } }}>
              <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                {product.title}
              </Typography>

              <Typography variant="h6" color="secondary">id:</Typography> 
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {product.id}
              </Typography>

              <Typography variant="h6" color="secondary">Category:</Typography> 
              <Typography color="text.primary" sx={{ mb: 2 }}>
                {product.category}
              </Typography>

              <Typography variant="h6" color="secondary" >Description:</Typography>
              <Typography variant="body1" >
                {product.description}
              </Typography>

              <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>Price:</Typography> 
              <Typography color="text.primary" >
                ${product.price}
              </Typography>

            </CardContent>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              color="secondary"
              sx={{ ":hover": { filter: 'brightness(1.5)' }, px: 3 }}
            >
              Back to Catalog
            </Button>
          </Box>
        </Card>
      )}

      {error && (
        <Typography variant="body1" color="error" sx={{ textAlign: 'center', mt: 4 }}>
          {error}
        </Typography>
      )}
    </>
  );
};

export default ProductDetails;
