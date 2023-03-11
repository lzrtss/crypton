import React from 'react';

import {
  CoinList,
  Container,
  ErrorMessage,
  NoContentMessage,
  SearchBar,
  Section,
  SectionHeader,
  Title,
} from 'components';
import { useGetCoinsQuery } from 'store/services';
import { useQuerySearch } from 'hooks/useQuerySearch';
import CoinsPageSkeleton from './CoinsPageSkeleton';

const CoinsPage = () => {
  const { searchQuery, handleChange } = useQuerySearch();

  const { data, error, isLoading } = useGetCoinsQuery({
    search: searchQuery,
  });

  const coins = data?.data.coins;

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <CoinsPageSkeleton />;
  }

  return (
    <Container>
      <Section>
        <SectionHeader>
          <Title>{searchQuery ? 'Search Results' : 'Top Coins'}</Title>
          <SearchBar value={searchQuery} onChange={handleChange} />
        </SectionHeader>
        {coins?.length ? <CoinList coins={coins} /> : <NoContentMessage />}
      </Section>
    </Container>
  );
};

export default CoinsPage;
