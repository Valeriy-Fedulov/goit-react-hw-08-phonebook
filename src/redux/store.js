import { createStore } from 'redux';

const initialState = { contacts: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contact/formSubmitHandler':
      return { contacts: [...state.contacts, ...payload] };

    case 'deleteContact':
      return {
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
