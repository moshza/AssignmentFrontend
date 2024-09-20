import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../interfaces/Product";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";




interface Props {
  product: Product;
  onDelete: (id: number) => void;
}



const ProductCard: React.FC<Props> = ({ product, onDelete }) => {

  const navigate = useNavigate();

  const navigateToProdDetails = (id: number) => {
    navigate(`products/${id}`);
  }

  const navigateToEditProd = (id: number) => {
    navigate(`update-product/${id}`);
  }

  return (
<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions className="buttons" sx={{ mt: 'auto' }}>
        <Button
          color="secondary"
          size="small"
          sx={{ ":hover": { filter: 'brightness(1.5)' } }}
          onClick={() => navigateToProdDetails(product.id)}
        >
          Show Details
        </Button>
        <Button
          color="info"
          size="small"
          sx={{ ":hover": { filter: 'brightness(1.5)' } }}
          onClick={() => navigateToEditProd(product.id)}
        >
          Edit Product
        </Button>
        <Button
          color="warning"
          size="small"
          sx={{ ":hover": { filter: 'brightness(1.5)' } }}
          onClick={() => onDelete(product.id)}
        >
          Delete Product
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
