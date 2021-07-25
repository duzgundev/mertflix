import { useContext, useState } from 'react';

import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarIconFilled } from '@heroicons/react/solid';
import cx from 'classnames';

import { AuthContext } from '@utils/auth';
import { IMG_API } from '@utils/tmdb';
import { db } from '@utils/firebase';

import styles from './MovieCard.module.scss';

export default function MovieCard({ className, movie }) {
  const movieName = movie.title || movie.name;

  const [favorite, setFavorite] = useState(false);

  const { currentUser } = useContext(AuthContext);

  async function toggleFavorite(movie, currentUser) {
    const userId = currentUser.uid;
    const docRef = db.collection('favorites').doc(`${userId}${movie.id}`);

    await docRef.get().then((doc) => {
      if (doc.exists) {
        docRef.delete();
        setFavorite(false);
      } else {
        docRef.set({ user_uid: userId, ...movie }, { merge: true });
        setFavorite(true);
      }
    });
  }

  // TODO: Figure out another way to get rid of code duplication, using local storage can be a part of the solution

  async function fetchFavorite(currentUser) {
    const userId = currentUser.uid;
    const docRef = db.collection('favorites').doc(`${userId}${movie.id}`);

    await docRef.get().then((doc) => {
      if (doc.exists) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    });
  }

  return (
    <div
      className={cx(styles.base, className)}
      onMouseEnter={() => fetchFavorite(currentUser)}
    >
      <img
        className={styles.image}
        src={`${IMG_API}${movie.backdrop_path}`}
        alt={movieName}
      />
      <p className={styles.text}>{movieName} </p>
      <button onClick={() => toggleFavorite(movie, currentUser)}>
        {favorite ? (
          <StarIconFilled className={styles.icon} width="24" />
        ) : (
          <StarIcon className={styles.icon} width="24" />
        )}
      </button>
    </div>
  );
}
