export const formSubmitHandler = data => ({
  type: 'app/formSubmitHandler',
  payload: data,
});

export const deleteContact = contactId => ({
  type: 'app/deleteContact',
  payload: contactId,
});
