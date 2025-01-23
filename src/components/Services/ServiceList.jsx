import React from "react";
import Grid2 from "@mui/material/Grid2";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ services, addToCart }) => {
  return (
    <Grid2 container spacing={3}>
      {services.map((service, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <ServiceCard service={service} addToCart={addToCart} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ServiceList;
