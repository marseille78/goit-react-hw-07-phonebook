import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from '../service';
// import axios from 'axios';

// axios.defaults.baseURL = "https://64823d6929fa1c5c5032c12d.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => getContacts());

export const addContact = createAsyncThunk('contacts/addContact', (data) => createContact(data));

export const deleteContact = createAsyncThunk('contacts/deleteContact', (id) => {
  console.log('contacts/deleteContact', id);
  removeContact(id);
});

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/contacts');
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
