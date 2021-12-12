import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/addContact');
const deleteContact = createAction('contact/deleteContact');
const setFilter = createAction('contact/setFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, setFilter };
