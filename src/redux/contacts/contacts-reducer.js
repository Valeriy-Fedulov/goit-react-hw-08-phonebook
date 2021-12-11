import { combineReducers } from 'redux';
import actionsTypes from './contacts-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADDCONTACT:
      return [...state, payload];

    case actionsTypes.DELETECONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.SETFILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
