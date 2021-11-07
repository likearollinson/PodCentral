import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const GlobalAppBar = () => {
  const darkBar = createTheme({
    palette: {
      secondary: {
        main: "#000000",
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={"secondary"}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/profile"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  PodcastCentral
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Button href="/" color="inherit" onClick={() => Auth.logout()}>
                  Logout
                </Button>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
      );
    } else {
      return (
        <Box>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={"secondary"}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                  component={Link}
                  to="/"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  PodCentral
                  <Button component={Link} color="inherit" to="/login">
                    Login
                  </Button>
                </Typography>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;