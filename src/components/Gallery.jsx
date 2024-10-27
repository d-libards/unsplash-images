import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context';
import { useFetchPhotos } from '../reactQueryCustomHooks';
import authFetch from '../axios/custom';

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const { isLoading, isError, data } = useFetchPhotos(searchTerm);

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((result) => {
        const url = result?.urls?.regular;
        return (
          <img
            key={result.id}
            src={url}
            alt={result.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}
export default Gallery;
