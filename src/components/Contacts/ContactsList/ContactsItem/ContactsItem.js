import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { SpinnerBorder } from 'components/Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactsItems = ({ contact }) => {
  const [isDeletingContact, setIsDeletingContact] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <li className="contacts__item">
        <b>{contact.name}:</b> {contact.phone}
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
    createdAt: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
