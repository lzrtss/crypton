import React from 'react';

import {
  Container,
  ErrorMessage,
  ExchangesTable,
  NoContentMessage,
  SearchBar,
  Section,
  SectionHeader,
  Title,
} from 'components';
import ExchangesPageSkeleton from './ExchangesPageSkeleton';
import { useQuerySearch } from 'hooks';
import { useGetExchangesQuery } from 'store/services';

const ExchangesPage = () => {
  const { data: exchanges, error, isLoading } = useGetExchangesQuery();

  const {
    filteredData: filteredExchanges,
    searchQuery,
    handleChange,
  } = useQuerySearch(exchanges);

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <ExchangesPageSkeleton />;
  }

  return (
    <Container>
      <Section>
        <SectionHeader>
          <Title>{searchQuery ? 'Search Results' : 'Top Exchanges'}</Title>
          <SearchBar value={searchQuery} onChange={handleChange} />
        </SectionHeader>

        {filteredExchanges?.length ? (
          <ExchangesTable exchanges={filteredExchanges} />
        ) : (
          <NoContentMessage />
        )}
      </Section>
    </Container>
  );
};

export default ExchangesPage;
