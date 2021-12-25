import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const items = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addContact({ name, phone }));
      reset();
    }
  }

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={e => {
            setName(e.currentTarget.value);
          }}
        />
      </label>
      <label>
        Phone
        <input
          className={s.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={phone}
          onChange={e => {
            setPhone(e.currentTarget.value);
          }}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
