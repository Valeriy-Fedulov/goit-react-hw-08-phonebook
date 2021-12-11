import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function ContactForm({ items, addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      addContact({ id: uuidv4(), name, number });
      reset();
    }
  }

  function reset() {
    setName('');
    setNumber('');
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
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={e => {
            setNumber(e.currentTarget.value);
          }}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
