import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';

export default function Contact() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
