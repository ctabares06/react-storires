import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "../Card";
import React from "react";

const ProductCard = ({
  image: { url, alt, size },
  product: { title, description, price },
  handleClick,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ padding: 0 }}>
        <CardMedia component="img" height={size} image={url} alt={alt} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Typography variant="body1" component="div" color="secondary">
          {price}
        </Typography>
        <Box sx={{ marginLeft: "auto" }}>
          <Button size="small" color="secondary" onClick={handleClick}>
            Buy
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
