import { useSelector } from 'react-redux';
import './ContactsList.css';

import { ContactsItems } from '../ContactsItem/ContactsItem';

export const ContactsList = () => {
  const contacts = useSelector(state => {
    return state.contacts.items.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <ul className="contacts__list">
      {contacts.map(contact => (
        <ContactsItems contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
