// src/components/Navbar.js
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#3f51b5",
          color: "#ffffff",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/" sx={{ color: "inherit" }}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" sx={{ color: "inherit" }}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          sx={{ color: "inherit" }}
        >
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Navbar;
