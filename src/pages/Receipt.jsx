import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";

const Receipt = () => {
  const location = useLocation();
  const customer = location.state?.customer || { name: "Unknown", email: "Unknown" };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Receipt
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography>
          <strong>Customer Name:</strong> {customer.name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {customer.email}
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        Purchased Items:
      </Typography>
      <List>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <ListItem key={index}>
              {item.name} - ₹{item.price.toFixed(2)} x {item.quantity}
            </ListItem>
          ))
        ) : (
          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            No items in the cart.
          </Typography>
        )}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">
        Total: ₹{cart.length > 0 ? total.toFixed(2) : "0.00"}
      </Typography>
    </Paper>
  );
};

export default Receipt;
