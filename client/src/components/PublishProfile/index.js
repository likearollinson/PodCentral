import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Axios from "axios";

import DarkHouse from "../../assets/podcast-image-dark-house.jpeg";

// import { WidgetLoader } from "react-cloudinary-upload-widget";
import CloudinaryWidget from "../Cloudinary";
import { GET_ME } from "../../utils/queries";
import { ADD_EPISODE } from "../../utils/mutations";

const styles = {
  coverArt: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
    marginTop: "10px",
  },
  coverArtFav: {
    display: "block",
    marginRight: "5px",
    width: "115px",
    padding: "5px 5px 5px",
    aspectRatio: "1 / 1",
  },
};

const PublishProfile = () => {
  // TODO: Change to not Alerts maybe use modals
  const successCallBack = () => {
    alert("Success!");
  };

  const failureCallBack = () => {
    alert("Failure!");
  };

  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me;
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    audio: "",
    season: "",
    episode: "",
  });
  const [addEpisode] = useMutation(ADD_EPISODE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addEpisode({
        variables: {
          input: { ...formState },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <>
      {/* <WidgetLoader /> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grow
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 2000 }}
          in={true}
        >
          <Typography
            variant="h2"
            component="div"
            align="center"
            pt={2}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Welcome Back!
          </Typography>
        </Grow>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              {/* NEED FORM FIELDS FOR EPISODE INFO */}
              <Typography
                variant="h4"
                component="div"
                align="center"
                pt={5}
                mx={3}
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                color="black"
              >
                Your Podcast
              </Typography>
            </Grow>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <img
                src={DarkHouse}
                alt="podcast cover art - dark house"
                style={styles.coverArt}
              />
            </Grow>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <Typography
                variant="h5"
                //   component={Link}
                align="center"
                pt={5}
                mx={3}
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                color="black"
              >
                Upload New Episode
                <CloudinaryWidget />
              </Typography>
            </Grow>
          </Grid>
          <Grid xs={12} md={6}>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <Typography
                variant="h4"
                component="div"
                align="center"
                pt={5}
                mx={3}
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                color="black"
              >
                Your Favorites
              </Typography>
            </Grow>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    // component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    // component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    // component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    // component={Link}
                    align="left"
                    direction="column"
                    justifyContent="center"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PublishProfile;
