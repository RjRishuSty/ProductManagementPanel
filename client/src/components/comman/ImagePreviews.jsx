import { Box, Grid } from '@mui/material'
import React from 'react'

const ImagePreviews = ({formData}) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} sx={{mt:1,p:2 }}>
          {formData.images?.map((item,index) => (
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Box
                key={index}
                component="img"
                src={item}
                alt="preview"
                sx={{
                  width: '100%',
                  height: '50vh',
                  objectFit: "cover",
                  borderRadius: 1,
                  border: "1px solid #ccc",
                }}
              />
            </Grid>
          ))}
        </Grid>

  )
}

export default ImagePreviews