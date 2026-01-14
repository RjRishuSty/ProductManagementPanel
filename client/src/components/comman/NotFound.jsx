import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

const NotFound = ({ useIn, height }) => {
  const handleRender = () => {
    switch (useIn) {
      case "inProduct":
        return (
          <Stack flexDirection='row' justifyContent='center' alignItems='center' sx={{height:height}} >
            <IconButton>
              <NotInterestedIcon fontSize="medium" />
            </IconButton>
            <Typography variant="body1" sx={{color:'text.secondary'}}>Oops! We couldn’t find any products here.</Typography>
          </Stack>
        );

      default:
        break;
    }
  };
  return (
    <Box sx={{ width: "100%", height: 'auto' }}>
      {handleRender()}
    </Box>
  );
};

export default NotFound;
