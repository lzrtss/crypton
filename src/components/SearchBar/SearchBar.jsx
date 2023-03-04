import React from 'react';

import { DebounceTextInput } from './SearchBar.styled';

const SearchBar = ({ value, onChange }) => {
  return (
    <DebounceTextInput
      type="search"
      debounceTimeout={500}
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
