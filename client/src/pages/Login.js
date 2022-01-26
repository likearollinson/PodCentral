import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
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

    <div>
      <Box
        mt="70px"
        display="flex"
        justifyContent="center"
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            mt={2}
            display="flex"
            justifyContent="center"
          >
            <Box>
              <TextField
                inputProps={{
                  style: { fontFamily: 'Arial', color: 'black' },
                }}
                style={{ width: '300px' }}
                variant="outlined"
                placeholder="youremail@mail.com"
                label="Email"
                name="email"
                type="email"
                id="email"
                focused
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
          >
            <Box>
              <TextField
                inputProps={{
                  style: { fontFamily: 'Arial', color: 'black' },
                }}
                style={{ width: '300px' }}
                variant="outlined"
                placeholder="********"
                label="Password"
                name="password"
                type="password"
                id="pwd"
                focused
                onChange={handleChange}
              />
            </Box>
          </Box>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
          >
            <Box
              display="flex"
              justifyContent="space-around"
              style={{ width: '300px' }}
            >
              <Button
                className="grow"
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  letterSpacing: '1px',
                  fontWeight: 'normal',
                  bgcolor: '#17141f',
                  boxShadow: '-1rem 0 3rem #000',
                  borderColor: 'black',
                  whiteSpace: "nowrap",
                  minWidth: "max-content"
                }}
                type="submit"
                marginRight="20px"
              >
                Sign In
              </Button>
              <Button
                variant="text"
                size="medium"
                component={Link}
                to="/"
                marginLeft="20px"
              >
                Forgot Password?
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mt={5}
        mb={3}
        ml={9}
        mr={9}
        pb={3}
        sx={{ borderBottom: 1 }}
      >
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography fontSize="22px" color="black" fontWeight="lighter" letterSpacing="1px">
          Don't have an account?
        </Typography>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/signup"
            sx={{
              paddingLeft: '54px',
              paddingRight: '54px',
              backgroundColor: '#f5b727',
              boxShadow: '-1rem 0 3rem #000'
            }}
          >
            <Typography color="black" fontWeight="bold" fontSize="18px">
              Sign up for PodCentral
            </Typography>
          </Button>
        </Box>
      </Box>
    </div >
  );
}

export default Login;
