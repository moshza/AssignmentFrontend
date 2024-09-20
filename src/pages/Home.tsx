import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";

import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState();



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);



  const handleDelete = async (id: number) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log("Item deleted successfully", res.data);
      setProducts(products.filter((prod) => prod.id != id));
    });
  };

  return (
    <>
          <div className="home-wrapper">
            <Typography variant="h3" color="secondary" sx={{mt: 5}}>Our Catalog</Typography>
            <div className="products-wrapper">
              {products &&
                products.map((prod) => (
                  <div className="product-item" key={prod.id}>
                    <ProductCard
                      product={prod}
                      onDelete={handleDelete}
                    />
                  </div>
                ))}
            </div>
              {error && <ErrorMessage message={error}/>}
          </div>
    </>
  );
};

export default Home;
