import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/contactsOperations';

import css from './ContactsList.module.css';
import { getFilter } from '../../redux/filter/filterSelector';

const ContactsList = () => {

  const { items, error, isLoading } = useSelector(state => state.contacts);
  const filterState = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteContact(id));
  }

  const getVisibleItems = () => {
    return items.filter(({ name }) => name.toLowerCase().includes(filterState.toLowerCase()));
  }

  const listContacts = getVisibleItems().map(({ id, name, phone }) => {
    return (
      <li key={ id } className={ css.item }>
        { name }: <span className={ css.value }>{ phone }</span>
        <button
          className={ css.btn }
          type="button"
          onClick={() => handleDelete(id)}
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
