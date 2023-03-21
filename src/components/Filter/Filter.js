import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';

import { filterContacts } from 'redux/slices/filterSlice';
import { selectFilterContacts } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className="filter__container">
      <p className="filter__text">Find contacts by name</p>

      <label>
        <input
          className="filter__input"
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
