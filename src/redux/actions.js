export const addContact = data => ({
  type: 'contact/addContact',
  payload: data,
});

export const deleteContact = contactId => ({
  type: 'contact/deleteContact',
  payload: contactId,
});

export const setFilter = value => ({
  type: 'filter/setFilter',
  payload: value,
});
