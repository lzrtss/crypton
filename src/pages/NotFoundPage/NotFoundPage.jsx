import { Container, GoHomeLink, Message } from 'components';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Container>
      <Message>Sorry, requested page can't be reached... 😔</Message>
      <GoHomeLink />
    </Container>
  );
};

export default NotFoundPage;
