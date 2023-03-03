import React from 'react';

import {
  CoinList,
  Container,
  ErrorMessage,
  NoContentMessage,
  Section,
  SectionHeader,
  Title,
} from 'components';
import { useGetCoinsQuery } from 'store/services';
import { useQuerySearch } from 'hooks/useQuerySearch';

const CoinsPage = () => {
  const { searchQuery } = useQuerySearch();

  const { data, error } = useGetCoinsQuery({
    search: searchQuery,
  });

  const coins = data?.data.coins;

  if (error) {
    return <ErrorMessage error={error?.message} />;
  }

  return (
    <Container>
      <Section>
        <SectionHeader>
          <Title>{searchQuery ? 'Search Results' : 'Top Coins'}</Title>
        </SectionHeader>
        {coins?.length ? <CoinList coins={coins} /> : <NoContentMessage />}
      </Section>
    </Container>
  );
};

export default CoinsPage;
