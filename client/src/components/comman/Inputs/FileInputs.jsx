import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImagePreviews from "../ImagePreviews";

const FileInputs = ({ field, onChange, formData }) => {
  return (
    <Box style={{ margin: "10px 0"}}>
      <Typography variant="body1">{field.label}</Typography>

      <input type="file" multiple accept="image/*" onChange={onChange} />
       {formData.images && formData.images.length > 0 && (
        <ImagePreviews formData={formData} />
      )}
    </Box>
  );
};

export default FileInputs;
