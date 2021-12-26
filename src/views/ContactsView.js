import React from 'react';
import ContactForm from '../components/contactform';
import Filter from '../components/filter/Filter';
import ContactList from '../components/contactlist/ContactList';

import Box from '@mui/material/Box';

const Contacts = () => (
  <Box
    sx={{
      textAlign: 'center',
    }}
  >
    <h2>Phonebook</h2>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </Box>
);

export default Contacts;
