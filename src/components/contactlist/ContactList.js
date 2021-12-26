import React from 'react';
import Contact from '../contact';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ContactList = () => (
  <List
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Contact />
  </List>
);

export default ContactList;
