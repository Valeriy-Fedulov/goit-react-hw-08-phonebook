import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Filter({ filter, setFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(actions.setFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
