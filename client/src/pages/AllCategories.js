import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CategoryCard from '../components/CategoryCard';

const AllCategories = () => {
  return (
    <Box flexGrow={1}>
      <Box
        className="boxColor"
        sx={{
          width: 'auto',
          pt: '100px',
          pl: '50px',
          pr: '50px',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ ml: '35px', mb: '20px' }}
        >
          <p className="categories">All Categories</p>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '75px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={8} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={8} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={8} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={8} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={8} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '75px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '100px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AllCategories;