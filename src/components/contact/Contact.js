import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';

export default function Contact() {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <ReactLoading type="bars" color="black" height={167} width={75} />
      )}
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
