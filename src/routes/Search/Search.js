import { useContext } from 'react';

import MovieGrid from '@components/MovieGrid';
import MovieCard from '@components/MovieCard';

import { SearchContext } from '@utils/search';

export default function Home() {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      {searchResults?.length ? (
        <MovieGrid className="mt-8">
          {searchResults.map((movie) => (
            <MovieCard className="px-0.5" movie={movie} key={movie.id} />
          ))}
        </MovieGrid>
      ) : (
        <div className="text-center pt-10 text-gray-300">
          Type something to search...
        </div>
      )}
    </>
  );
}
