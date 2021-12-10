export const ADD = {
  type: 'contact/formSubmitHandler',
  payload: {
    id: 1,
    name: 'dtyuthjk',
    number: 123456789,
  },
};

export const formSubmitHandler = data => ({
  type: 'contact/formSubmitHandler',
  payload: data,
});

export const deleteContact = contactId => ({
  type: 'contact/deleteContact',
  payload: contactId,
});
