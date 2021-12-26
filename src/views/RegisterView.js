import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },

        display: 'flex',
        position: 'absolute',
        right: '0',
        top: '0',
        height: '100vh',
        width: '30%',
        marginLeft: 'auto',
        zIndex: '-1',
        '& > :not(style)': {
          m: 1,
          padding: '100px 30px',
          textAlign: 'center',
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper elevation={3}>
        <h1>Sing up</h1>
        <label>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>
        <Button
          variant="contained"
          endIcon={<AppRegistrationIcon />}
          type="submit"
        >
          Sing up
        </Button>
      </Paper>
    </Box>
  );
}

export default RegisterView;
