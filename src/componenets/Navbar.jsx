import * as React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";
import Teams from "./Teams";
import Login from "./Login";

import { Link, Route, Routes } from "react-router-dom";
import {
  Stack,
  Avatar,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

const drawerWidth = 250;
const navItems = [
  "home",
  "Services",
  "Skills",
  "Teams",
  "About",
  "Contact",
  "Login",
];

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Welcome
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item} style={{paddingLeft: 15,textDecoration: 'none'}}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} flexDirection="column">
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
            spacing={45}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Avatar
              alt="Adda"
              src="../aa.JPG"
              sx={{
                width: 40,
                height: 40,
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            />
          </Stack>

          <Avatar
            alt="Adda"
            src="../aa.JPG"
            sx={{
              width: 70,
              height: 70,
              display: {
                xs: "none",
                sm: "block",
              },
              marginRight: "30px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Welcome
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button  color="inherit" sx={{
             marginX:'10px',
             
              }}>
                <Link to={item} key={item} style={{
                  paddingLeft: 10, textDecoration: 'none' ,color: 'inherit'}} >
                  {item}
                </Link>
              </Button>

            ))}
          </Box>
        </Toolbar>
      </AppBar>
    
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </Box>
  );
}

export default Navbar;
