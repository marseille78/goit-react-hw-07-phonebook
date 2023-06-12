import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/contactsOperations';

const ContactsList = () => {

  const { items, error, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const listContacts = items.map(({ id, name, phone }) => {
    return (
      <li key={ id } className={ css.item }>
        { name }: <span className={ css.value }>{ phone }</span>
        <button
          className={ css.btn }
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      { isLoading && <h2>Loading...</h2> }
      {
        items && (
          <ul>
            {listContacts}
          </ul>
        )
      }
      { error && <h2>Error</h2> }
    </>
  );
};

export default ContactsList;
