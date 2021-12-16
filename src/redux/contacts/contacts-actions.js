import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61b810b564e4a10017d18d8c.mockapi.io';

const addContact = text => dispatch => {
  const contact = { text };

  dispatch({ type: 'contacts/addContactRequest' });

  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch({ type: 'contacts/addContactSuccess', payload: data }),
    )
    .catch(error =>
      dispatch({ type: 'contacts/addContactError', payload: error }),
    );
};

const deleteContact = createAction('contact/deleteContact');
const setFilter = createAction('contact/setFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, setFilter };
