import { contactsSlice, filterSlice } from './reducer'

export const { addContact, deleteContact } = contactsSlice.actions;
export const { addFilter } = filterSlice.actions;

export const getContactsValue = state => state.contacts.value;
export const getFilterValue = state => state.filter.value;