import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarIconFilled } from '@heroicons/react/solid';
import cx from 'classnames';

import { AuthContext } from '@utils/auth';
import { IMG_API_400 } from '@utils/tmdb';
import { db } from '@utils/firebase';

import fallback_img from '@images/fallback_img.jpg';

import styles from './MovieCard.module.scss';

export default function MovieCard({ className, movie }) {
  const movieName = movie.title || movie.name;

  const history = useHistory();
  const [favorite, setFavorite] = useState(false);
  const { currentUser } = useContext(AuthContext);

  async function toggleFavorite(movie, currentUser) {
    const userId = currentUser.uid;
    const docRef = db.collection('favorites').doc(`${userId + movie.id}`);

    await docRef.get().then((doc) => {
      if (currentUser && doc.exists) {
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
    const docRef = db.collection('favorites').doc(`${userId + movie.id}`);

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
      onMouseEnter={() => !!currentUser && fetchFavorite(currentUser)}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`${
            movie.backdrop_path
              ? IMG_API_400 + movie.backdrop_path
              : fallback_img
          }`}
          alt={movieName}
        />
      </div>
      <p className={styles.text}>{movieName} </p>
      <button
        onClick={() =>
          !!currentUser
            ? toggleFavorite(movie, currentUser)
            : history.push('/login')
        }
      >
        {favorite ? (
          <StarIconFilled color="#E4B721" className={styles.icon} width="24" />
        ) : (
          <StarIcon color="#E4B721" className={styles.icon} width="24" />
        )}
      </button>
    </div>
  );
}
