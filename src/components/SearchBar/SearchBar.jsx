import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  value: '',
  onChange: () => {},
};

export default SearchBar;
