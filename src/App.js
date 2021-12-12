import './App.css';
import ContactForm from './components/contactform';
import ContactList from './components/contactlist';
import Filter from './components/filter';

function App() {
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

export default App;
