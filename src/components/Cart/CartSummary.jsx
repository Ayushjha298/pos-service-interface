import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const CartSummary = ({ cart, setCart, onClose }) => {
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, parseInt(newQuantity) || 1) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Cart Summary</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {cart.map((item, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 1 }}>
                {item.name} - ₹{item.price.toFixed(2)}
              </Box>
              <TextField
                type="number"
                size="small"
                value={item.quantity}
                onChange={(e) => updateQuantity(index, e.target.value)}
                sx={{ width: "70px", mr: 2 }}
              />
              <IconButton color="error" onClick={() => removeItem(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">Total: ₹{total.toFixed(2)}</Typography>
        <Button
          variant="contained"
          color="success"
          fullWidth
          href="/checkout"
          sx={{ mt: 2 }}
        >
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
