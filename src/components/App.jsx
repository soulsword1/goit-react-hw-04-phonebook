import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const checkIfContactExists = contactName =>
    contacts.find(({ name }) => name === contactName);

  const addContact = data => {
    const contactId = { id: nanoid() };
    const contact = { ...contactId, ...data };

    if (checkIfContactExists(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return false;
    }

    setContacts(prevState => [...prevState, contact]);
    return true;
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleSearchInput = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    const addToLocaleStirage = () => {
      const contactsJson = JSON.stringify(contacts);
      window.localStorage.setItem('contacts', contactsJson);
    };
    addToLocaleStirage();
  }, [contacts]);

  let contactsList = [];
  const normalizedFilter = filter.toUpperCase();
  contactsList = contacts.filter(contact =>
    contact.name.toUpperCase().includes(normalizedFilter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onInput={handleSearchInput} />
      <ContactList contacts={contactsList} onDelete={deleteContact} />
    </div>
  );
}
