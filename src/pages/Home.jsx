import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Badge, Drawer, TextField, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ServiceCard from "../components/Services/ServiceCard"; 
import CartSummary from "../components/Cart/CartSummary";

const Home = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredServices, setFilteredServices] = useState([]); 

  const services = [
    { name: "Yoga Class", price: 1500.0, quantity: 1 },
    { name: "Personal Training", price: 5000.0, quantity: 1 },
    { name: "Nutrition Consultation", price: 300.0, quantity: 1 },
    { name: "Meditation Workshop", price: 200.0, quantity: 1 },
    { name: "Spa Therapy", price: 400.0, quantity: 1 },
    { name: "Fitness Assessment", price: 250.0, quantity: 1 },
    { name: "Group Fitness Class", price: 1800.0, quantity: 1 },
    { name: "Advanced Yoga Workshop", price: 3500.0, quantity: 1 },
    { name: "Strength Training", price: 4500.0, quantity: 1 },
    { name: "Cardio Blast Session", price: 2200.0, quantity: 1 },
  ];

  useEffect(() => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const addToCart = (service) => {
    const existingItemIndex = cart.findIndex((item) => item.name === service.name);
    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, service]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Select Services</Typography>
        <IconButton color="primary" onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="Search Services"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>


      <Grid container spacing={4}>
        {filteredServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>

      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
  <Box width={350} p={2}>
    <CartSummary cart={cart} setCart={setCart} onClose={() => setIsCartOpen(false)} />
  </Box>
</Drawer>

    </Box>
  );
};

export default Home;
