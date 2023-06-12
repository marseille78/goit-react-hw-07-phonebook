import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/contactsOperations';

export const App = () => {

  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm/>

      <h2>Contacts</h2>

      <Filter/>

      <ContactsList/>
    </>
  );
};
