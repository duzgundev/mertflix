import cx from 'classnames';
import TMDB from '@utils/tmdb';
import MovieRow from '@components/MovieRow';

export default function Movies({ className }) {
  return (
    <div className={cx('space-y-6', className)}>
      <MovieRow title="Trending Now" fetchUrl={TMDB.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={TMDB.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={TMDB.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={TMDB.fetchComedyMovies} />
      <MovieRow title="Documentaries" fetchUrl={TMDB.fetchDocumentaries} />
    </div>
  );
}
