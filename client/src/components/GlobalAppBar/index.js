import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from 'react-responsive';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const ElevationScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


const GlobalAppBar = (props) => {
  const darkBar = createTheme({
    palette: {
      secondary: {
        main: "#17141d",
        contrastText: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        "Oswald",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (

        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar position="static" color={"secondary"}>
              <Toolbar>
                <Grid
                  container
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid>
                    <Typography variant="h6">
                      <Button
                        size="large"
                        component={Link}
                        color="inherit"
                        to="/"
                      >
                        PodCentral
                      </Button>
                    </Typography>
                  </Grid>
                  <Grid>
                    <IconButton
                      component={Link}
                      to="/publish"
                      size="large"
                      align="center"
                      aria-label="menu"
                      sx={{ ml: 2, color: "#f5b727" }}
                    >
                      <PodcastsIcon />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton
                      size="large"
                      component={Link}
                      to="/profile"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="inherit"
                      onClick={() => Auth.logout()}
                    >
                      <LogoutIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </React.Fragment >

      );
    } else {
      return (
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <ThemeProvider theme={darkBar}>
              <AppBar
                color={"secondary"}
              >
                <Toolbar
                >
                  <Grid
                    container
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid>
                      <Button size="large" component={Link} color="inherit" to="/">
                        PodCentral
                      </Button>
                    </Grid>
                    <Grid>
                      <IconButton
                        component={Link}
                        to="/"
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, color: "#f5b727" }}
                      >
                        <PodcastsIcon />
                      </IconButton>
                    </Grid>
                    <Grid>
                      <IconButton
                        size="large"
                        component={Link}
                        color="inherit"
                        to="/login"
                      >
                        <LoginIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </ThemeProvider>
          </ElevationScroll>
        </React.Fragment >
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;
