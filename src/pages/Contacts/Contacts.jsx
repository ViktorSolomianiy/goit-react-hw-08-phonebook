import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import './Contacts.css';

import { SpinnerMutatingDots } from 'components/Spinner/Spinner';
import { ContactsForm } from 'components/Contacts/ContactsForm/ContactForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="phonebook-container">
      <h1 className="phonebook-title">Phonebook</h1>
      <ContactsForm />

      {contacts.length !== 0 && (
        <div className="contacts__container">
          <h2 className="contacts__title">Contacts</h2>

          <Filter />
          <ContactsList />
        </div>
      )}
      {isLoading && !error && contacts.length === 0 && <SpinnerMutatingDots />}
    </div>
  );
}
