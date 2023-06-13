import css from './Filter.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterReducer } from '../../redux/filter/filterSlice';

const Filter = () => {

  const dispatch = useDispatch();

  const [valueFilter, setValueFilter] = useState('');

  const handleChange = (e) => {
    setValueFilter(e.target.value);
    dispatch(changeFilterReducer(e.target.value));
  }

  return (
    <div className={css.container}>
      <h3>Find contacts by name</h3>
      <input
        className={ css.field }
        type='text'
        name='filter'
        value={ valueFilter }
        onChange={ handleChange }
      />
    </div>
  );
};

export default Filter;
