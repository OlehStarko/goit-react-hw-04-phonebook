import PropTypes from 'prop-types';
import css from '../css/phonebook.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter__container}>
      <p className={css.input__description}> Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        placeholder="Find..."
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
