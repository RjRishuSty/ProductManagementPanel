import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{bgcolor:'primary.dark',p:1,mt:3}}>
      <Typography variant='h5' sx={{color:'#fff',textAlign:'center'}}>Footer</Typography>
    </Box>
  )
}

export default Footer