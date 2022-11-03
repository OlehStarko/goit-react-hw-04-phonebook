import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/phonebook.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  hanldeSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={css.form__container}>
        <form onSubmit={this.hanldeSubmit}>
          <label>
            <p className={css.input__description}>Name</p>
            <input
              className={css.form__input}
              type="text"
              name="name"
              placeholder="Contact name"
              aria-label="Input for your name"
              value={this.state.name}
              onChange={this.hanldeChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            <p className={css.input__description}>Number</p>
            <input
              className={css.form__input}
              type="tel"
              name="number"
              placeholder="Phone number"
              aria-label="Input for your phone number"
              value={this.state.number}
              onChange={this.hanldeChange}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </label>
          <div>
            <button type="submit" className={css.add__button}>
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
