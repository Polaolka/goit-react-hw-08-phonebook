import React from 'react';
import css from '../ContactsList/ContactsList.module.css';
import { deleteContact } from 'redux/Contacts/operations';
import { toast } from 'react-toastify';
import { selectVisibleContacts } from '../../redux/selectors';
import { fetchContacts } from "redux/Contacts/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/Contacts/contactsSelectors";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  return (
    <ul className={css.listWrapper}>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
