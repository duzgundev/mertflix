import { useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MovieCard from '@components/MovieCard';
import MovieGrid from '@components/MovieGrid';

import { AuthContext } from '@utils/auth';
import { db } from '@utils/firebase';

export default function Favorites() {
  const { currentUser } = useContext(AuthContext);
  const query = db
    .collection('favorites')
    .where('user_uid', '==', currentUser.uid);
  const [favorites] = useCollectionData(query);

  return (
    <>
      <h2 className="capitalize text-3xl mb-20 mt-4">{`${currentUser.displayName}'s Favorites`}</h2>
      {favorites?.length ? (
        <MovieGrid>
          {favorites.map((movie) => (
            <MovieCard className="px-0.5" movie={movie} key={movie.id} />
          ))}
        </MovieGrid>
      ) : (
        <div className="text-center pt-10 text-gray-300">
          You haven't added any titles to your favorites yet.
        </div>
      )}
    </>
  );
}
