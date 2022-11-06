import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import css from '../css/phonebook.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <span className={css.contact__name}>{contact.name}: </span>
      <a className={css.contact__phone} href={`tel:${contact.number}`}>
        {contact.number}
      </a>
      <IconButton
        className={css.delete__button}
        onClick={onDeleteContact}
        aria-label="Delete contact"
      >
        <DeleteIcon width="10px" height="8px" />
      </IconButton>
    </>
  );
};

export default ContactItem;
