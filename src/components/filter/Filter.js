import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

import TextField from '@mui/material/TextField';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <TextField
        label="Find contacts by name"
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
