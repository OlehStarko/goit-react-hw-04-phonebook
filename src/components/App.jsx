import { useState, useEffect } from 'react';
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import { v4 as uuid } from 'uuid';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import css from './css/phonebook.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    const answer = window.confirm('Want to delete?');

    if (answer) {
      setContacts(contacts.filter(i => i.id !== id));
    }
  };

  return (
    <Container>
      <h1 className={css.form__title}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className={css.form__title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={filterContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
