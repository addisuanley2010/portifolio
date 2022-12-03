import * as React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";
import Teams from "./Teams";
import Login from "./Login";
import { useState, useContext } from "react";
import { Addisu } from "../App";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
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

import Register from "./Register";
import UploadPost from "./UploadPost";
import PageNotFound from "./PageNotFound";

const drawerWidth = 250;
const navItems = ["home", "Services", "Skills", "Teams", "About", "Contact"];

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const Aschale = useContext(Addisu);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Welcome {Aschale.username}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item}
                style={{ paddingLeft: 15, textDecoration: "none" }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
         <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="post" style={{ paddingLeft: 15, textDecoration: "none" }}>
              <ListItemText primary=" add post" />
            </Link>
          </ListItemButton>
        {!Aschale.display &&(
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link
              to="login"
              style={{ paddingLeft: 15, textDecoration: "none" }}
            >
              <ListItemText primary="login"></ListItemText>
            </Link>
          </ListItemButton>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} flexDirection="column">
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          marginRight: "0px",
          marginBottom: "10px",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
            spacing={35}
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
            {/* 
            this must be displayed after logged in
             */}
            {Aschale.display ? (
              <Tooltip title="Account settings">
                <IconButton>
                  <Avatar
                    alt="Adda"
                    onClick={handleClick}
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
                </IconButton>
              </Tooltip>
            ) : (
              <></>
            )}
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
            Welcome {Aschale.username}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                color="inherit"
                sx={{
                  marginX: "10px",
                }}
              >
                <Link
                  to={item}
                  key={item}
                  style={{
                    paddingLeft: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}
            <Button
              color="inherit"
              sx={{
                marginX: "10px",
              }}
            >
              <Link
                to="/post"
                style={{
                  paddingLeft: 10,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                add post
              </Link>
            </Button>
            {!Aschale.display ? (
              <Button
                color="inherit"
                sx={{
                  marginX: "10px",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    paddingLeft: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  login
                </Link>
              </Button>
            ) : (
              <Tooltip title="Account settings">
                <IconButton>
                  <Avatar
                    alt="Adda"
                    onClick={handleClick}
                    src="../aa.JPG"
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
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
        <Route path="/post" exact element={<UploadPost />}></Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/services" exact element={<Services />}></Route>
        <Route path="/skills" exact element={<Skills />}></Route>
        <Route path="/teams" exact element={<Teams />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <React.Fragment>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 10,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 2,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              Aschale.setDisplay(!Aschale.display);
              sessionStorage.removeItem("accessToken");
              Aschale.setUsername("")

            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </Box>
  );
}

export default Navbar;
