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
import WatchListPageSkeleton from './WatchListPageSkeleton';
import { useQuerySearch, useWatchList } from 'hooks';

const WatchListPage = () => {
  const { error, isLoading, watchList } = useWatchList();
  const {
    filteredData: filteredCoins,
    searchQuery,
    handleChange,
  } = useQuerySearch(watchList);

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <WatchListPageSkeleton />;
  }

  return (
    <Container>
      <Section>
        <SectionHeader>
          <Title>{searchQuery ? 'Search Results' : 'Watch List'}</Title>
          <SearchBar value={searchQuery} onChange={handleChange} />
        </SectionHeader>

        {filteredCoins?.length ? (
          <CoinList coins={filteredCoins} />
        ) : (
          <NoContentMessage />
        )}
      </Section>
    </Container>
  );
};

export default WatchListPage;
