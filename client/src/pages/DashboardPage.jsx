import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { products } = useSelector((state) => state.product);

  const getCategoryCounts = (filterFn = () => true) => {
    return products
      .filter(filterFn)
      .reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {});
  };

  const totalCounts = getCategoryCounts(); 
  const activeCounts = getCategoryCounts((item) => item.isActive === true);
  const outOfStockCounts = getCategoryCounts((item) => item.stock === 0);

  return (
    <Box sx={{  p: 2 }}>
      <Typography gutterBottom variant="h4" fontWeight={600}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        
        <Grid size={{xs:12,sm:12,md:3}}>
          <Card sx={{height:'50vh',bgcolor:'primary'}}>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" color="text.secondary">
                Total Products
              </Typography>
              {Object.entries(totalCounts).map(([cat, count]) => (
                <Typography key={cat} variant="body2">
                  {cat}: {count}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12,sm:12,md:3}}>
          <Card sx={{height:'50vh',bgcolor:'primary'}}>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" color="text.secondary">
                Active Products
              </Typography>
              {Object.entries(activeCounts).map(([cat, count]) => (
                <Typography key={cat} variant="body2">
                  {cat}: {count}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12,sm:12,md:3}}>
          <Card sx={{height:'50vh',bgcolor:'primary'}}>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" color="text.secondary">
                Out of Stock
              </Typography>
              {Object.entries(outOfStockCounts).map(([cat, count]) => (
                <Typography key={cat} variant="body2">
                  {cat}: {count}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12,sm:12,md:3}}>
          <Card sx={{height:'50vh',bgcolor:'primary'}}>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" color="text.secondary">
                Categories
              </Typography>
              {Object.entries(totalCounts).map(([cat, count]) => (
                <Typography key={cat} variant="body2">
                  {cat}: {count}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
