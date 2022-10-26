import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useCart } from "../../../../hooks/useCart";



const ProductCard = ({ id, name, image, price, handleClick , quantity}) => {
  const {
    handleAddItem,
  } = useCart();
  return (
    <Card sx={{ maxWidth: 200, border: `1.5px solid ${'#1B1B4D'}`}} onClick={handleClick}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography sx={{color: '#1B1B4D'}} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{color: '#1B1B4D', marginBottom: '8px', fontSize: '16px'}} variant="body2">
          Price <b>{price}$</b>
        </Typography>
        <Button onClick={() => 
          handleAddItem({id, name, image, price, quantity: 1}) }
          sx={{backgroundColor: '#5c5cff', borderRadius: '4px', marginRight: '8px', fontWeight: 600, ":hover": {backgroundColor: '#1B1B4D'}}} size="small" variant="contained">Buy</Button>
          <Button sx={{backgroundColor: '#5c5cff', borderRadius: '4px', fontWeight: 600, ":hover": {backgroundColor: '#1B1B4D'}}} size="small" variant="contained">Details</Button>
      </CardContent>
    </Card>
  );
};
       

export default ProductCard;

