import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import cx from 'classnames';

import { StarIcon, XIcon } from '@heroicons/react/outline';
import { StarIcon as StarIconFilled } from '@heroicons/react/solid';
import { Dialog } from '@headlessui/react';

import { AuthContext } from '@utils/auth';
import { IMG_API_400, IMG_API_ORIGINAL } from '@utils/tmdb';
import { db } from '@utils/firebase';

import fallback_img from '@images/fallback_img.jpg';

import styles from './MovieCard.module.scss';

export default function MovieCard({ className, movie }) {
  const movieName = movie.title || movie.name;

  const history = useHistory();
  const [favorite, setFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      onMouseEnter={() => currentUser && fetchFavorite(currentUser)}
      onClick={() => setIsOpen(true)}
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
        className={styles.button}
        onClick={(event) => {
          event.stopPropagation();
          !!currentUser
            ? toggleFavorite(movie, currentUser)
            : history.push('/login');
        }}
      >
        {favorite ? (
          <StarIconFilled color="#E4B721" className={styles.icon} width="24" />
        ) : (
          <StarIcon color="#E4B721" className={styles.icon} width="24" />
        )}
      </button>

      <Dialog
        as="div"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-10"
      >
        <Dialog.Overlay className="fixed inset-0 z-0 bg-black opacity-50" />

        <div className="flex relative max-w-3xl bg-black rounded z-10">
          <img
            width="400"
            className="rounded-l"
            src={IMG_API_ORIGINAL + movie.poster_path}
            alt={movieName}
          />
          <div className="p-4 pt-10 h-full overflow-y-auto max-h-[600px]">
            <Dialog.Title as="h3" className="text-3xl font-bold">
              {movieName}
            </Dialog.Title>
            <div className="mt-4 flex items-center">
              <span className="text-xl text-yellow-400">
                {movie.vote_average}
              </span>
              <button
                className="ml-2"
                onClick={() =>
                  !!currentUser
                    ? toggleFavorite(movie, currentUser)
                    : history.push('/login')
                }
              >
                {favorite ? (
                  <StarIconFilled color="#E4B721" width="32" />
                ) : (
                  <StarIcon color="#E4B721" width="32" />
                )}
              </button>
            </div>
            <p className="mt-4">{movie.overview}</p>
          </div>
          <button
            className="absolute top-3 right-3"
            onClick={() => setIsOpen(false)}
          >
            <XIcon width="24" />
          </button>
        </div>
      </Dialog>
    </div>
  );
}
