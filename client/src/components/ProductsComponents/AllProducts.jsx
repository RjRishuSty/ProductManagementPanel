import React from "react";
import { Box, Typography } from "@mui/material";
import Tables from "../comman/Tables";

const AllProducts = () => {
  return (
    <Box sx={{ height: "77vh", p: 2 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        mb={2}
        sx={{ color: "text.default" }}
      >
        All Products
      </Typography>

      <Tables />
    </Box>
  );
};

export default React.memo(AllProducts);
