import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetCoinsQuery } from 'store/services';

export const useCoins = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const limit = 20;

  const {
    data,
    error,
    isLoading: isLoadingCoins,
  } = useGetCoinsQuery({
    limit: limit,
    search: searchQuery,
  });

  const handleSearchChange = e => {
    const value = e.target.value;

    setSearchQuery(value);
    setSearchParams({ search: value });

    if (!value?.trim()) {
      setSearchParams();
    }
  };

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams, data]);

  return {
    filteredCoins: data?.data?.coins,
    error,
    isLoading: isLoadingCoins,
    searchQuery,
    handleSearchChange,
  };
};
