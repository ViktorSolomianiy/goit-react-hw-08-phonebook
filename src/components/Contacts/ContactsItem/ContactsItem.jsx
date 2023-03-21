import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import { SpinnerBorder } from 'components/Spinner/Spinner';

export const ContactsItems = ({ contact }) => {
  const [isDeletingContact, setIsDeletingContact] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <li className="contacts__item">
        <b>{contact.name}:</b> {contact.number}
        <button
          className="contacts__btn"
          type="button"
          onClick={() => {
            setIsDeletingContact(true);
            dispatch(deleteContact(contact.id));
          }}
        >
          {isDeletingContact ? <SpinnerBorder /> : 'Delete'}
        </button>
      </li>
    </>
  );
};

ContactsItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
