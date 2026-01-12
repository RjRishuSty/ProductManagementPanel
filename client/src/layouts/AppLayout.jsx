
import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import Header from "../components/comman/Header";
import Sidebar from "../components/comman/Sidebar";
import Footer from "../components/comman/Footer";

const DRAWER_OPEN_WIDTH = 250;
const DRAWER_CLOSE_WIDTH = 150;

const AppLayout = () => {
  const [drawerWidth, setDrawerWidth] = useState(DRAWER_OPEN_WIDTH);

  const handleDrawerToggle = useCallback(() => {
    setDrawerWidth((prev) =>
      prev === DRAWER_OPEN_WIDTH ? DRAWER_CLOSE_WIDTH : DRAWER_OPEN_WIDTH
    );
  },[]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <Header drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          border:'2px solid red',
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          mt: 3,
          p: 2,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;
