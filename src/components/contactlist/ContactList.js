import React from 'react';
import Contact from '../contact';

import List from '@mui/material/List';

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
