import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {value: []},
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
     state.value = state.value.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    addFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});