import { createStore } from 'redux';

const initialState = { contacts: { items: [], filter: '' } };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contact/formSubmitHandler':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

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
