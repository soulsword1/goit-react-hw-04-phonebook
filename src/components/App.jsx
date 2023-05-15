import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkIfContactExists = contactName =>
    this.state.contacts.find(({ name }) => name === contactName);

  addContact = data => {
    const contactId = { id: nanoid() };
    const contact = { ...contactId, ...data };

    if (this.checkIfContactExists(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return false;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    return true;
  };

  addToLocaleStirage() {
    const contactsJson = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', contactsJson);
  }

  handleSearchInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const parsedLocale = JSON.parse(localStorage.getItem('contacts'));
    parsedLocale && this.setState({ contacts: parsedLocale });
  }

  componentDidUpdate(prevState) {
    this.state.contacts !== prevState.contacts && this.addToLocaleStirage();
  }

  render() {
    console.log('hello')
    let contactsList = [];
    const normalizedFilter = this.state.filter.toUpperCase();
      contactsList = this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onInput={this.handleSearchInput} />
        <ContactList contacts={contactsList} onDelete={this.deleteContact} />
      </div>
    );
  }
}
