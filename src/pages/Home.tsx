import "../App.css";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import ErrorMessage from "../components/ErrorMessage";
import { deleteProduct, fetchAllProducts } from "../services/product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState();


  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleDelete = async (id: number) => {
     await deleteProduct(id).then((data) => {
      console.log("Item deleted successfully", data);
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
