import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";


const AddProduct = () => {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
      });

    const [error, setError] = useState();
    
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('https://fakestoreapi.com/products',formData)
        .then(res => {
            console.log("Item added successfully:", res.data)
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
            setError(error.message)
        })
      };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
    <Typography variant="h4" textAlign="center" color="secondary">Add Product</Typography>

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
    >
    </TextField>

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

    <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
      Submit
    </Button>
    {error && <ErrorMessage message={error}/>}
  </Box>
  )
}

export default AddProduct