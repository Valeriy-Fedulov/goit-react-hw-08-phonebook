import React, { useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/contactform/ContactForm';
import { ContactList } from './components/contactlist';
import { Filter } from './components/filter';

function App() {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // formSubmitHandler({
  //   id: uuidv4(),
  //   name: 'zaq',
  //   number: 135790,
  // });
  // useEffect(() => {
  //   localStorage.getItem('contacts') &&
  //     setContacts(JSON.parse(localStorage.getItem('contacts')));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function getVisibleContacts() {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
      // contacts={getVisibleContacts()}
      // deleteContact={deleteContact}
      />
    </>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  filter: PropTypes.string,
};

// const mapStateToProps = state => {
//   return {
//     items: state.contacts.items,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     formSubmitHandler: data => dispatch(actions.formSubmitHandler(data)),
//     deleteContact: () => dispatch(actions.deleteContact()),
//   };
// };

export default App;
