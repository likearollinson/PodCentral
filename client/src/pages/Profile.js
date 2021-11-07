import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';

import podcastLogo from '../assets/podcast-logo-2.png'
import spaceShipLogo from '../assets/space-ship-logo.png'

const styles = {
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '125px'
  },
  spaceLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '190px'
  }
}
const Profile = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Typography
              variant="h2"
              component={Link}
              align="center"
              pt={5}
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
              color="black"
            >
              Publish
            </Typography>
          </Grow>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Typography
              variant="h5"
              component="div"
              align="center"
              pt={5}
              mx={3}
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
              color="black"
            >
              Upload your own podcast in just a few easy steps. We take care of the hard parts so you can focus on making your best podcast.
            </Typography>
          </Grow>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Box pt={3}>
              <img src={podcastLogo} alt="space ship - discover logo" style={styles.logo} />
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Typography
              variant="h2"
              component={Link}
              align="center"
              pt={5}
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
              color="black"
            >
              Discover
            </Typography>
          </Grow>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Typography
              variant="h5"
              component="div"
              align="center"
              pt={5}
              mx={3}
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
              color="black"
            >
              Browse through our extensive library of podcasts to find something you love. We have a podcast for everyone.
            </Typography>
          </Grow>
          <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
            <Box pt={3}>
              <img src={spaceShipLogo} alt="space ship - discover logo" style={styles.spaceLogo} />
            </Box>
          </Grow>
        </Grid>
      </Grid >
    </Box >
  );
};

export default Profile;


