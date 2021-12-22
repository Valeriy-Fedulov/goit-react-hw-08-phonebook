import React from 'react';
import ContactForm from '../components/contactform';
import Filter from '../components/filter/Filter';
import ContactList from '../components/contactlist/ContactList';

const Contacts = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </>
);

export default Contacts;
