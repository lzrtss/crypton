import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQuerySearch = (data = []) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
    setSearchParams({ search: value });

    if (!value?.trim()) {
      setSearchParams();
    }
  };

  const filteredData = useMemo(() => {
    return data?.filter(
      item =>
        item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, data]);

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams, data]);

  return {
    filteredData,
    searchQuery,
    handleChange,
  };
};
