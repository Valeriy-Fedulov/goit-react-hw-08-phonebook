import PropTypes from "prop-types";
import s from "./Contact.module.css";

const Contact = ({ contacts, deleteContact }) => (
  <>
    {contacts.map((contact) => (
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

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export { Contact };
