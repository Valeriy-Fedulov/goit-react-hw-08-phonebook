import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

export default function Contact() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(actions.deleteContact(contact.id))}
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
