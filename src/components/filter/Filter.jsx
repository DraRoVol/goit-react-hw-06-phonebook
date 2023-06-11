import React from 'react';
import cssModule from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, getFilterValue } from '../../redux/actions';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
    const handleFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };
  return (
    <div className={cssModule.filter}>
      <label htmlFor="filterInput">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filterInput"
        value={filter}
        onChange={handleFilterChange}
        className={cssModule.input}
      />
    </div>
  );
};

export default Filter;
