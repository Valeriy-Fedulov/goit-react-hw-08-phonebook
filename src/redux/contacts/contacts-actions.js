import actionsTypes from './contacts-types';

export const addContact = data => ({
  type: actionsTypes.ADDCONTACT,
  payload: data,
});

export const deleteContact = contactId => ({
  type: actionsTypes.DELETECONTACT,
  payload: contactId,
});

export const setFilter = value => ({
  type: actionsTypes.SETFILTER,
  payload: value,
});
