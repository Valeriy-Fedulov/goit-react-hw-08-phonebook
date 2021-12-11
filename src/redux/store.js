import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const roorReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(roorReducer, composeWithDevTools());

export default store;
