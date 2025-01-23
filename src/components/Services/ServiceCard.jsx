import React from "react";
import { Card, CardContent, CardActions, Button, Typography, Box } from "@mui/material";

const ServiceCard = ({ service, addToCart }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "auto",
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mb: 2 }}>
          Price: ₹{service.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(service)}
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
