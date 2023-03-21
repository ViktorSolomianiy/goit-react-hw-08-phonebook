export const selectFilterContacts = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsAddingContact = state => state.contacts.isAddingContact;
export const selectError = state => state.contacts.error;
