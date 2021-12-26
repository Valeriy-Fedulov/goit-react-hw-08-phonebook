import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

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
    <>
      <h1>Sing up</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
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

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Sing up
        </Button>
      </form>
    </>
  );
}

export default RegisterView;
