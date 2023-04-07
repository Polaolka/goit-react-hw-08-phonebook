import css from '../PhoneBook/PhoneBook.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/Contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const PhoneBookEditor = ({id, name, number, setIsEditing}) => {

  const [nameForEdit, setNameForEdit] = useState(name);
  const [numberForEdit, setNumberForEdit] = useState(number);
  const [idForEdit, setIdForEdit] = useState(id);
  const dispatch = useDispatch();

  const onEditContact = event => {
    switch (event.target.name) {
      case 'name':
        setNameForEdit(s => (s = event.target.value));
        break;
      case 'number':
        setNumberForEdit(s => (s = event.target.value));

        break;
      default:
        return;
    }
  };

  const handleSubmitEdit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = idForEdit;
    dispatch(updateContact({ id, name, number }));
    toast(`Contact ${name} update successfully`);
    setNameForEdit('');
    setNumberForEdit('');
    setIdForEdit('');
    setIsEditing(false);
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmitEdit}>
        <label className={css.label}>
          Name for edit
          <input
            className={css.input}
            type="text"
            name="name"
            value={nameForEdit}
            onChange={onEditContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Phone for edit
          <input
            className={css.input}
            type="tel"
            name="number"
            value={numberForEdit}
            onChange={onEditContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.buttonAdd} type="submit">
          Edit contact
        </button>
      </form>
    </div>
  );
};

