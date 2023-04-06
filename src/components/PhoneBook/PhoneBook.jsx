import css from '../PhoneBook/PhoneBook.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/Contacts/contactsSelectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      toast(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    toast(`Contact ${name} added successfully`);
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            // value={name}
            // onChange={onInputContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Phone
          <input
            className={css.input}
            type="tel"
            name="number"
            // value={phone}
            // onChange={onInputContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.buttonAdd} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};
