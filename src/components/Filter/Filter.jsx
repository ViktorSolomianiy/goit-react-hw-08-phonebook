import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';

import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilterContacts } from 'redux/filter/selectors';

import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className="filter__container">
      <TextField
        onChange={changeFilter}
        value={filter}
        label="Find contacts by name"
        type="text"
        id="standard-basic"
        variant="standard"
        // Style
        color="warning"
        size="medium"
        sx={{ width: '250px' }}
      />
    </div>
  );
};
