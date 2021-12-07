import types from './contact-types';

const addContact = data => ({
  types: types.ADD,
  payload: data,
});

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case 'app/deleteContact':
      return {
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload,
          ),
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default { addContact };
