import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  isAddingContact: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.isAddingContact = true;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isAddingContact = false;
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.rejected]: handleRejected,
//   [addContact.pending](state, action) {
//     state.isLoading = true;
//     state.isAddingContact = true;
//   },
//   [addContact.rejected]: handleRejected,
//   [deleteContact.pending]: handlePending,
//   [deleteContact.rejected]: handleRejected,

//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },

//   [addContact.fulfilled](state, action) {
//     state.isAddingContact = false;
//     state.isLoading = false;
//     state.error = null;
//     state.items.push(action.payload);
//   },

//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;

//     const index = state.items.findIndex(
//       task => task.id === action.payload.id
//     );
//     state.items.splice(index, 1);
//   },
// },
