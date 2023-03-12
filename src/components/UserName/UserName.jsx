import React from 'react';
import PropTypes from 'prop-types';

import { Greeting, Name } from './UserName.styled';

const UserName = ({ name, nickname, email }) => {
  return (
    <Greeting>
      Hi, <Name>{name || nickname || email}</Name>
    </Greeting>
  );
};

UserName.propTypes = {
  name: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
};

export default UserName;
