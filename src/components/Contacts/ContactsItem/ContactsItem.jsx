import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ContactsItem.css';

import { deleteContact } from 'redux/contacts/operations';

import { SpinnerBorder } from 'components/Spinner/Spinner';
import { Button } from '@mui/material';

export const ContactsItems = ({ contact }) => {
  const [isDeletingContact, setIsDeletingContact] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <li className="contacts__item">
        <p className="contacts__text">
          <b>{contact.name}:</b> {contact.number}
        </p>

        <Button
          onClick={() => {
            setIsDeletingContact(true);
            dispatch(deleteContact(contact.id));
          }}
          type="button"
          variant="outlined"
          color="warning"
          size="large"
          sx={{ width: '120px', height: '35px' }}
        >
          {isDeletingContact ? <SpinnerBorder /> : 'Delete'}
        </Button>
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
