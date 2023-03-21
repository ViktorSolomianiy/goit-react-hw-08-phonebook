import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsAddingContact } from 'redux/selectors';
import toast from 'react-hot-toast';
import './ContactForm.css';

import { addContact } from 'redux/operations';
import { SpinnerBorder } from 'components/Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const isAddingContact = useSelector(selectIsAddingContact);
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${name} is already in the list`);
    }

    dispatch(addContact({ name, phone }));

    toast.success(`${name} is added to the contact list!`);

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form__contaiter">
        <label className="form__label--name">Name</label>
        <input
          className="form__input--name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className="form__label--name">Number</label>
        <input
          className="form__input--name"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className="form__btn" type="submit" disabled={isAddingContact}>
          {isAddingContact ? <SpinnerBorder /> : 'Add contacts'}
        </button>
      </form>
    </>
  );
};
