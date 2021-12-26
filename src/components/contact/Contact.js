import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { contactsSelectors } from '../../redux/contacts';
import { contactsOperations } from '../../redux/contacts';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Contact() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 0.5,
        },
        width: '500px',
      }}
    >
      {isLoading && (
        <ReactLoading type="bars" color="black" height={167} width={75} />
      )}
      {contacts.map(contact => (
        <Paper key={contact.id} elevation={3}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ContactPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              type="button"
              onClick={() =>
                dispatch(contactsOperations.deleteContact(contact.id))
              }
            >
              Delete
            </Button>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Paper>
      ))}
    </Box>
  );
}
