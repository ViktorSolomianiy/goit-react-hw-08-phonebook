import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { options } from 'utils/optionsToastStyled';
import './ContactForm.css';

import {
  selectContacts,
  selectIsAddingContact,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { SpinnerBorder } from 'components/Spinner/Spinner';
import { TextField, Button } from '@mui/material';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const isAddingContact = useSelector(selectIsAddingContact);
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${name} is already in the list`, options);
    }

    if (contacts.find(contact => contact.number === number)) {
      return toast.error(`Number: ${number} is already in the list`, options);
    }

    if (name.trim() === '' || number.trim() === '') {
      return toast.warn('Please fill in all fields!', options);
    }

    dispatch(addContact({ name, number }));

    toast.success(`${name} is added to the contact list!`, options);

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form__contaiter">
        <TextField
          label="Name"
          type="text"
          name="name"
          id="outlined-basic"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // Styles
          size="medium"
          color="warning"
          sx={{ width: '400px' }}
        />
        <TextField
          label="Number"
          type="tel"
          name="number"
          id="outlined-basic"
          variant="outlined"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // Styles
          size="medium"
          color="warning"
          sx={{ width: '400px' }}
        />

        <Button
          type="submit"
          variant="outlined"
          color="warning"
          size="large"
          sx={{
            width: '200px',
            height: '50px',
            fontSize: '15px',
            padding: '2px',
            marginTop: '10px',
          }}
        >
          {isAddingContact ? <SpinnerBorder /> : 'Add contacts'}
        </Button>
      </form>
    </>
  );
};
