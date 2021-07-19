import cx from 'classnames';
import { IMG_API } from '@utils/tmdb';
import styles from './MovieCard.module.scss';

export default function MovieCard({ className, movie }) {
  const movieName = movie.title || movie.name;
  return (
    <div className={cx(styles.base, className)}>
      <img
        className={styles.image}
        src={`${IMG_API}${movie.backdrop_path}`}
        alt={movieName}
      />
      <p className={styles.text}>{movieName} </p>
    </div>
  );
}
