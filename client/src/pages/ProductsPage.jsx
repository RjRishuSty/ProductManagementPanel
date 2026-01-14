import React from 'react'
import {Box, Typography} from '@mui/material';
import { useLocation } from 'react-router-dom';
import AllProducts from '../components/ProductsComponents/AllProducts';
import AddProduct from '../components/ProductsComponents/AddProduct';

const ProductsPage = () => {
    const {pathname} = useLocation();

    const handleRenderPage = ()=>{
        switch (pathname) {
            case '/product':
                return(<AllProducts/>)
            case '/product/new':
                return(<AddProduct/>)
            default:
                return(<Typography>Sorry</Typography>)
        }
    }
  return (
    <Box sx={{minHeight:'88vh'}}>
        {handleRenderPage()}
    </Box>
  )
}

export default ProductsPage