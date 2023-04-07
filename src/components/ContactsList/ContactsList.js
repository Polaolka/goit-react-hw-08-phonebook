import React, { useState } from 'react';
import css from '../ContactsList/ContactsList.module.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { deleteContact } from 'redux/Contacts/operations';
import { toast } from 'react-toastify';
import { selectVisibleContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/Contacts/contactsSelectors';
import { PhoneBookEditor } from 'components/PhoneBookEditor/PhoneBookEditor';

export const ContactsList = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = useSelector(selectVisibleContacts);

  const sortedVisibleContacts = [...visibleContacts].sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  const handleEdite = (id, name, number ) => {
    setIsEditing(true);
    setName(name);
    setNumber(number);
    setId(id);
  };

  return (
    <>
      {isEditing && <PhoneBookEditor id={id} name={name} number={number} setIsEditing={setIsEditing}/>}
      <ul className={css.listWrapper}>
        {isLoading && !error && <b>Request in progress...</b>}
        {sortedVisibleContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
            <button
              type="button"
              className={css.button}
              onClick={() => handleDelete(id)}
            >
              <DeleteOutlinedIcon />
            </button>
            <button
              type="button"
              className={css.button}
              onClick={() => handleEdite( id, name, number )}
            >
              <ModeEditOutlinedIcon />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
