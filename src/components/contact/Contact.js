import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { contactsSelectors } from '../../redux/contacts';
import { contactsOperations } from '../../redux/contacts';

export default function Contact() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <ReactLoading type="bars" color="black" height={167} width={75} />
      )}
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() =>
              dispatch(contactsOperations.deleteContact(contact.id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
