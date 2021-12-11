import { createStore } from 'redux';

const initialState = { contacts: { items: [], filter: '' } };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contact/addContact':
      return {
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case 'contact/deleteContact':
      return {
        contacts: {
          ...state.contacts,
          items: [
            ...state.contacts.items.filter(contact => contact.id !== payload),
          ],
        },
      };

    case 'filter/setFilter':
      return {
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
