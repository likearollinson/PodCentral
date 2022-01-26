import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';

import podcast2017 from '../assets/best-pods-2017.jpg';
import podcast2019 from '../assets/best-pods-2019.jpg';

const styles = {
  podcastLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
  },
  lowerImage: {
    display: 'block',
    width: '150px',
  },
};

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Home = () => {

  return (
    <div>
      <Grid container marginTop="70px">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            letterSpacing="3px"
            fontWeight="lighter"
            align="center"
            marginTop="10px"
          >
            PodCentral
          </Typography>
          <Typography
            variant="h4"
            align="center"
            marginBottom="25px"
          >
            Share your interests and discover new ones at the same time.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            margin="10px 10px 10px 10px"
            sx={{
              border: 1,
              backgroundColor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
              width: "250px",
              height: "250px"
            }}
          >
            <Typography
              variant="h4"
              letterSpacing="2px"
              color="#f5b727"
              fontWeight="lighter"
              align="center"
            >
              Publish
            </Typography>
            <Box
              margin="25px 5px 25px 5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize="h7"
                fontWeight="lighter"
                align="center"
                color="white"
              >
                Upload your own podcast in just a few easy steps. We take care of the hard parts so you can focus on making your best podcast.
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                className="hoverLeft"
                size="large"
                component={Link}
                to="/publish"
                sx={{
                  backgroundColor: '#f5b727',
                  border: 1,
                  borderColor: 'black',
                }}
                variant="contained"
                align="center"
              >
                <Typography color="black" fontWeight="bold">
                  Publish
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            margin="10px 10px 10px 10px"
            sx={{
              border: 1,
              boxShadow: '-1rem 0 3rem #000',
              height: "auto",
              maxWidth: "250px"
            }}
          >
            <img
              src={podcast2017}
              alt="podcast cover art"
              margin="10px 10px 10px 10px"
              sx={{ justifyContent: "center" }}
            ></img>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="10px 10px 10px 10px"
            sx={{
              border: 1,
              boxShadow: '-1rem 0 3rem #000',
              height: "auto",
              maxWidth: "250px"
            }}
          >
            <img
              src={podcast2019}
              alt="podcast cover art"
              margin="10px 10px 10px 10px"
              alignItems="center"
            ></img>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          s={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            margin="10px 10px 10px 10px"
            justifyContent="center"
            alignItems="center"
            sx={{
              border: 1,
              backgroundColor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
              width: "250px",
              height: "250px"
            }}
          >
            <Typography
              variant="h4"
              letterSpacing="2px"
              color="#f5b727"
              fontWeight="lighter"
              align="center"
            >
              Discover
            </Typography>
            <Box
              margin="25px 5px 25px 5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h7"
                fontWeight="lighter"
                align="center"
                color="white"
              >
                Browse through our extensive library of podcasts to find something you love. We have a podcast for everyone.
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                className="hoverLeft"
                size="large"
                component={Link}
                to="/discover"
                sx={{
                  backgroundColor: '#f5b727',
                  border: 1,
                  borderColor: 'black',
                }}
                variant="contained"
              >
                <Typography color="black" fontWeight="bold">
                  Discover
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid >
    </div >
  );
}

export default Home;