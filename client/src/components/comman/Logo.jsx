import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logoImg from "../../assets/logo.svg";
const Logo = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      sx={{ borderBottom: "1px solid #ccc", py: 1.5 }}
    >
      <Box
        component="img"
        src={logoImg}
        alt="Arekiv"
        sx={{ width: 50, height: 40, objectFit: "contain", mr: 1 }}
      />
      <Typography variant="h2" color="inherit">
        Arekiv
      </Typography>
    </Stack>
  );
};

export default Logo;
