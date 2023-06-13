import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';

import css from './ContactForm.module.css';

const ContactForm = () => {

  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddUser = (user) => {

    const repeated = contacts.find(({ name }) => name === user.name);

    if (repeated) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    dispatch(addContact(user));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isInvalid()) return;

    const user = {
      name,
      phone,
    };

    handleAddUser(user);

    clearForm();
  }

  const handleInput = (e) => {
    const target = e.target;

    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'phone':
        setPhone(target.value);
        break;
      default:
        return;
    }
  }

  const clearForm = () => {
    setName('');
    setPhone('');
  }

  const isInvalid = () => {
    return !(name.length > 0 && phone.length > 0);
  }

  return (
    <div className={ css.container }>
      <form onSubmit={ handleSubmit }>
        <label>
          <h3>Name</h3>
          <input
            className={ css.field }
            type='text'
            name='name'
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={ name }
            onChange={ handleInput }
          />
        </label>

        <label>
          <h3>Number</h3>
          <input
            className={ css.field }
            type='tel'
            name='phone'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            value={ phone }
            onChange={ handleInput }
          />
        </label>

        <div className={ css.btnBlock }>
          <button
            className={ css.btn }
            type='submit'
          >
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
