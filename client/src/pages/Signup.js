import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const Signup = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        mt="90px"
        display="flex"
        justifyContent="center"
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            mt={2}
          >
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
            >
              <TextField
                inputProps={{
                  style: { fontFamily: 'Arial', color: 'black' },
                }}
                style={{ width: '300px' }}
                variant="outlined"
                placeholder="John"
                label="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                focused
                onChange={handleChange}
              />
            </Box>
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
            >
              <TextField
                inputProps={{
                  style: { fontFamily: 'Arial', color: 'black' },
                }}
                style={{ width: '300px' }}
                variant="outlined"
                placeholder="Doe"
                label="Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                focused
                onChange={handleChange}
              />
            </Box>
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
            >
              <TextField
                inputProps={{
                  style: { fontFamily: 'Arial', color: 'black' },
                }}
                style={{ width: '300px' }}
                variant="outlined"
                placeholder="johndoe@email.com"
                label="Email"
                name="email"
                type="email"
                id="email"
                focused
                onChange={handleChange}
              />
            </Box>
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
            >
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
              <Button
                className="grow"
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: 'black',
                  letterSpacing: '1px',
                  fontWeight: 'normal',
                  bgcolor: '#17141f',
                  boxShadow: '-1rem 0 3rem #000',
                  fontSize: '18px',
                  whiteSpace: "nowrap",
                  minWidth: "max-content"
                }}
                type="submit"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mt={2}
        mb={3}
        ml={9}
        mr={9}
        pb={3}
        sx={{ borderBottom: 1 }}
      >
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          fontSize="22px"
          color="black"
          fontWeight="lighter"
          letterSpacing="1px"
        >
          Already have an account?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          className=""
          variant="contained"
          size="large"
          component={Link}
          to="/signin"
          sx={{
            paddingLeft: '54px',
            paddingRight: '54px',
            backgroundColor: '#f5b727',
          }}
        >
          <Typography color="black" fontWeight="bold" fontSize="18px">
            Sign In to your account
          </Typography>
        </Button>
      </Box>
    </div >
  );
}

export default Signup;
