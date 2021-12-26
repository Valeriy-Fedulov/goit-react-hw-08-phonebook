import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Sing in</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
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

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginView;
