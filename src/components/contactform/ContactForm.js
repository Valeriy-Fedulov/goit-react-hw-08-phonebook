import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
      reset();
    }
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        display: 'flex',
        justifyContent: 'center',

        '& > :not(style)': {
          m: 1,
          padding: '30px',
          textAlign: 'center',
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper elevation={3}>
        <label>
          <TextField
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={e => {
              setName(e.currentTarget.value);
            }}
          />
        </label>
        <label>
          <TextField
            label="Phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={e => {
              setNumber(e.currentTarget.value);
            }}
          />
        </label>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Add contact
        </Button>
      </Paper>
    </Box>
  );
}
