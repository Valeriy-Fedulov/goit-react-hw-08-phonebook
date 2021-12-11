// import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import ContactForm from './components/contactform/ContactForm';
import { ContactList } from './components/contactlist';
import Filter from './components/filter/Filter';

function App({ items, addContact }) {
  // useEffect(() => {
  //   localStorage.getItem('items') &&
  //     addContact(JSON.parse(localStorage.getItem('items')));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: data => dispatch(actions.addContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
