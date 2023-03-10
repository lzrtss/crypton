import React from 'react';
import { Greeting, Name } from './UserName.styled';

const UserName = ({ name, nickname, email }) => {
  return (
    <Greeting>
      Hi, <Name>{name || nickname || email}</Name>
    </Greeting>
  );
};

export default UserName;
