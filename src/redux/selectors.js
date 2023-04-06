import { createSelector } from '@reduxjs/toolkit';
import {selectContacts} from './Contacts/contactsSelectors'

// export const selectContacts = state => state.contacts.items;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;

export const selectContactFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);
