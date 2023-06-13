import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

export const App = () => {
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
