import { createSelector } from '@reduxjs/toolkit';
import {selectContacts} from './Contacts/contactsSelectors'

export const selectContactFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);
