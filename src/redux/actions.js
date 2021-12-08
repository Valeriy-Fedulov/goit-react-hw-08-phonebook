export const formSubmitHandler = data => ({
  type: 'contact/formSubmitHandler',
  payload: data,
});

export const deleteContact = contactId => ({
  type: 'contact/deleteContact',
  payload: contactId,
});
