import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem';


export default function ContactList({contacts, onDelete}) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} number={number} name={name} onDelete={onDelete} />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
}