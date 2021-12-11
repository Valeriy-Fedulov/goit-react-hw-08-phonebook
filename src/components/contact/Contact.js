import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Contact({ items, filter, deleteContact }) {
  const contacts = getVisibleContacts();

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
    <>
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

Contact.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  filter: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contactId => dispatch(actions.deleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
