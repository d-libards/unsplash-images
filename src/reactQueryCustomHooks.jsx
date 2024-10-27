import { useQuery } from '@tanstack/react-query';
import authFetch from './axios/custom';

export function useFetchPhotos(searchTerm) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await authFetch.get(`?query=${searchTerm}&per_page=12`);
      return data;
    },
  });
  return { data, isError, isLoading };
}
