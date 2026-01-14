import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Paginations = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="end"
      alignItems="center"
      sx={{
        mt: 1.5,
        px: 2,
      }}
    >
      <IconButton color="primary" onClick={onPrev} disabled={currentPage === 1} sx={{bgcolor:'text.secondary',mr:2,"&:hover":{bgcolor:'#7E22CE'}}}>
        <ArrowBackIosIcon fontSize="medium" />
      </IconButton>

      <Typography>
        Page {currentPage} of {totalPages}
      </Typography>
      <IconButton
        color="primary"
        onClick={onNext}
        disabled={currentPage === totalPages} sx={{bgcolor:'text.secondary',ml:2,"&:hover":{bgcolor:'#7E22CE'}}}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </IconButton>
    </Stack>
  );
};

export default React.memo(Paginations);
