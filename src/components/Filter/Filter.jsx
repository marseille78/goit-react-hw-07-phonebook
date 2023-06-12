import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.container}>
      <h3>Find contacts by name</h3>
      <input
        className={ css.field }
        type='text'
        name='filter'
      />
    </div>
  );
};

export default Filter;
