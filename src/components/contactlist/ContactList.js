import { Contact } from "../contact";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    <Contact contacts={contacts} deleteContact={deleteContact} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export { ContactList };
