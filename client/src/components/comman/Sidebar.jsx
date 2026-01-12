// Sidebar.jsx
import React from "react";
import { Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Sidebar = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.3s ease",
        },
      }}
    >
      <Toolbar />
      <List>
        {["Dashboard", "Users", "Products", "Settings"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  opacity: drawerWidth === 100 ? 0 : 1,
                  transition: "opacity 0.2s",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default React.memo(Sidebar);
