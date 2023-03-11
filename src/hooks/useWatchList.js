import { useAuth0 } from '@auth0/auth0-react';
import toast from 'react-hot-toast';

import {
  useAddCoinToWatchListMutation,
  useGetWatchListQuery,
  useRemoveCoinFromWatchListMutation,
} from 'store/services';
import { getWatchListCoinId } from 'utils';

export const useWatchList = () => {
  const { user } = useAuth0();
  const userId = user?.sub;

  const {
    error,
    data: watchList,
    isLoading,
  } = useGetWatchListQuery({ userId });

  const [addCoinToWatchList] = useAddCoinToWatchListMutation();

  const [removeCoinFromWatchList] = useRemoveCoinFromWatchListMutation();

  const handleAddToWatchList = async (e, coin) => {
    e.preventDefault();

    const { name: coinName } = coin;

    await addCoinToWatchList({ coin, userId });
    toast.success(`${coinName} has been added to Watch List`);
  };

  const handleRemoveFromWatchList = async (e, coinId, coinName) => {
    e.preventDefault();

    const id = await getWatchListCoinId(coinId, watchList);
    await removeCoinFromWatchList(id);
    toast.success(`${coinName} has been removed from Watch List`);
  };

  return {
    error,
    isLoading,
    watchList,
    handleAddToWatchList,
    handleRemoveFromWatchList,
  };
};
