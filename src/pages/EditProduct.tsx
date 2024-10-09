import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { fetchSingleProduct, updateProduct } from "../services/product";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchSingleProduct(id)
        .then((prod) => {
          setFormData({
            title: prod.product.title || "",
            price: prod.product.price || "",
            category: prod.product.category || "",
            description: prod.product.description || "",
            image: prod.product.image || "",
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      price: parseFloat(formData.price),
    };

    if (id) {
      try {
        const updatedProduct = await updateProduct(id, updatedFormData);
        console.log("Item Edited successfully:", updatedProduct);
        navigate("/");
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    } else {
      console.error("Product ID is missing.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      <Typography variant="h4" textAlign="center" color="secondary">
        Edit Product
      </Typography>

      <TextField
        fullWidth
        required
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        required
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        type="number"
      />

      <TextField
        fullWidth
        required
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
      ></TextField>

      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
      {error && <ErrorMessage message={error} />}
    </Box>
  );
};

export default EditProduct;
