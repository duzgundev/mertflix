import { useEffect, useState } from 'react';

import MovieCard from '@components/MovieCard';
import Carousel from '@components/Carousel';

import axios from '@utils/axios';

import styles from './MovieRow.module.scss';

export default function MovieRow({ className, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className={className}>
      <h2 className="text-2xl mb-4">{title}</h2>
      <Carousel>
        {movies.map((movie) => (
          <MovieCard
            className={styles.movieCard}
            movie={movie}
            key={movie.id}
          />
        ))}
      </Carousel>
    </div>
  );
}
