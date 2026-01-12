// Header.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { toggleMode } from "../../store/slices/modeSlice";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const Header = ({ drawerWidth, onDrawerToggle }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onDrawerToggle} sx={{ mr: 2 }}>
          <FormatAlignRightIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>

        <IconButton color="inherit" onClick={() => dispatch(toggleMode())}>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
