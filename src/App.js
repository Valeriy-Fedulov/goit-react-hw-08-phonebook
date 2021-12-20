import { Router, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import ContactForm from './components/contactform';
import ContactList from './components/contactlist';
import Filter from './components/filter';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Router>
    </>
  );
}

/* <>
  <h1>Phonebook</h1>
  <ContactForm />
  <h2>Contacts</h2>
  <Filter />
  <ContactList />
</>; */
