import React from 'react';
import PropTypes from 'prop-types';

import { StyledSelect } from './Select.styled';

const Select = ({ options, defaultValue, handleChange, ...otherProps }) => {
  return (
    <StyledSelect
      onChange={handleChange}
      defaultValue={defaultValue}
      {...otherProps}
    >
      {options?.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
