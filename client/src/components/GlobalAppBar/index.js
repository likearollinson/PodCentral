import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
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
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 150;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const GlobalAppBar = () => {
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

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 901 })
    return isDesktop ? children : null
  }
  const NotDesktop = ({ children }) => {
    const notDesktop = useMediaQuery({ maxWidth: 900 })
    return notDesktop ? children : null
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Desktop>
            <ThemeProvider theme={darkBar}>
              <MuiAppBar position="static" color={"secondary"}>
                <Toolbar>
                  <Grid
                    container
                    direction="row"
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
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                    </Box>
                  </Grid>
                </Toolbar>
              </MuiAppBar>
            </ThemeProvider>
          </Desktop>
          <NotDesktop>
            <ThemeProvider theme={darkBar}>
              <CssBaseline />
              <AppBar position="fixed" open={open} color="secondary">
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    PODCENTRAL
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                  <ListItem component={Link} to="/" >Home</ListItem>
                  <ListItem component={Link} to="/profile">Profile</ListItem>
                  <ListItem component={Link} to="/discover">Discover</ListItem>
                  <ListItem component={Link} to="/publish">Publish</ListItem>
                </List>
              </Drawer>
            </ThemeProvider>
          </NotDesktop>
        </div>
      );
    } else {
      return (
        <ThemeProvider theme={darkBar}>
          <MuiAppBar position="static" color={"secondary"}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Button size="large" component={Link} color="inherit" to="/">
                    PodCentral
                  </Button>
                </Grid>
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
                <Grid item>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Typography variant="h7" pt="3px">
                      <Button
                        size="large"
                        component={Link}
                        color="inherit"
                        to="/login"
                      >
                        Login
                      </Button>
                    </Typography>
                    <IconButton
                      size="large"
                      component={Link}
                      color="inherit"
                      to="/login"
                    >
                      <LoginIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </MuiAppBar>
        </ThemeProvider>
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;
