import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { connect } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

function Contact({ fetchContacts }) {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contact);
