import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

export default function Contact() {
  function getVisibleContacts(items, filter) {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }

  const { items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const contacts = getVisibleContacts(items, filter);

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

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   items: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContact: contactId => dispatch(actions.deleteContact(contactId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contact);
