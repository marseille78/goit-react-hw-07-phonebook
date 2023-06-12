import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [addContact, deleteContact, fetchContacts];

const fn = (type) => arrThunk.map(el => el[type]);

const handlePending = (state) => {
  state.isLoading = true;
}

const handleFullfiled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledRemove = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledRemove)
      .addMatcher(
        isAnyOf(
          ...fn(PENDING)
          // fetchContacts.pending,
          // addContact.pending,
          // deleteContact.pending
        ), handlePending
      )
      .addMatcher(
        isAnyOf(
          ...fn(REJECTED)
          // fetchContacts.rejected,
          // addContact.rejected,
          // deleteContact.rejected
        ), handleRejected
      )
      .addMatcher(
        isAnyOf(
          ...fn(FULFILLED)
          // fetchContacts.fulfilled,
          // addContact.fulfilled,
          // deleteContact.fulfilled
        ), handleFullfiled
      )
  }
});

export const contactsReducer = contactsSlice.reducer;
