import TMDB from '@utils/tmdb';
import MovieRow from '@components/MovieRow';

export default function Movies() {
  return (
    <div className="space-y-10">
      <MovieRow title="Trending Now" fetchUrl={TMDB.fetchTrending} />
      <MovieRow
        title="Mertflix Originals"
        fetchUrl={TMDB.fetchNetflixOriginals}
      />
      <MovieRow title="Top Rated" fetchUrl={TMDB.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={TMDB.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={TMDB.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={TMDB.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={TMDB.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={TMDB.fetchDocumentaries} />
    </div>
  );
}
