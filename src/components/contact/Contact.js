import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

function Contact({ items, filter, deleteContact }) {
  return (
    <>
      {items.map(contact => (
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

const getVisibleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
