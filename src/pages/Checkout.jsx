import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Checkout = () => {
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  const closeDialog = () => setPaymentSuccess(false);

  const navigateToReceipt = () => {
    navigate("/receipt", { state: { customer, cart } });
    localStorage.removeItem("cart"); 
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Customer Name"
          name="name"
          value={customer.name}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Customer Email"
          name="email"
          type="email"
          value={customer.email}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handlePayment}>
          Make Payment
        </Button>
      </Box>

      <Dialog open={paymentSuccess} onClose={closeDialog}>
        <DialogTitle>Payment Successful</DialogTitle>
        <DialogContent>
          <Typography>Thank you for your purchase, {customer.name}!</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={navigateToReceipt}
            sx={{ mt: 2 }}
          >
            View Receipt
          </Button>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default Checkout;
