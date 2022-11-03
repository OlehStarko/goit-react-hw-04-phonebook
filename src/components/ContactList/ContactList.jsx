import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import css from '../css/phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(contact => (
        <li className={css.contact__item} key={contact.id}>
          <ContactItem
            contact={contact}
            onDeleteContact={() => {
              onDeleteContact(contact.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
