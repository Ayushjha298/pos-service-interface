import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Receipt from "./pages/Receipt";


function App() {
    return (
        <Router>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Service POS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ my: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/receipt" element={<Receipt/>} />
                </Routes>
                ;
            </Container>
            <Box
                component="footer"
                sx={{ py: 2, textAlign: "center", bgcolor: "#f5f5f5" }}
            >
                <Typography variant="body2">&copy; 2025 POS App</Typography>
            </Box>
        </Router>
    );
}

export default App;
