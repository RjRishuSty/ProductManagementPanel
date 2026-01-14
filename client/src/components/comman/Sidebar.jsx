import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Logo from "./logo";
import { sidebarData } from "../../objectData/sidebarData";
import { Link } from "react-router-dom";

const Sidebar = ({ drawerWidth }) => {
  // 👇 default open = dashboard
  const [openMenu, setOpenMenu] = useState("dashboard");

  const handleToggle = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <Drawer
      variant="permanent"
      color="inherit"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height:'100dvh',
          // overflowY:'scroll',
          bgcolor: "primary.main",
          borderRight:'1px solid #ccc',
        },
      }}
    >
      <Logo />

      <List sx={{height:'100%',mt:1,p:1.7}}>
        {sidebarData.map((item) => (
          <Box key={item.id}>
            <Typography
            variant="caption"
              sx={{
                opacity: 0.8,
                color:'text.primary',
              }}
            >
              {item.section}
            </Typography>

            {/* Parent Menu */}
            <ListItemButton onClick={() => handleToggle(item.id)} sx={{mb:1 ,mt:0.5,bgcolor:'primary.light',borderRadius:0.5}}>
              <ListItemText primary={item.title} />
              {openMenu === item.id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Dropdown */}
            <Collapse in={openMenu === item.id} timeout="auto" unmountOnExit sx={{mb:1}}>
              <List component="div" disablePadding>
                {item.children.map((child) => (
                  <ListItemButton component={Link} to={child?.path} key={child} sx={{ pl: 4 }}>
                    <ListItemText primary={child?.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default React.memo(Sidebar);
