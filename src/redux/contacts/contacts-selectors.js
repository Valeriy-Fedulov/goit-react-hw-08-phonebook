import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getItems,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
