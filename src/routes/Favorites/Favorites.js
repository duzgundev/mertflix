import { useContext, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Layout from '@components/Layout';
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
    <Layout>
      <h2 className="text-3xl mb-20 mt-4">{`${currentUser.displayName}'s Favorites`}</h2>
      <MovieGrid>
        {favorites &&
          favorites.map((movie) => (
            <MovieCard className="px-0.5" movie={movie} key={movie.id} />
          ))}
      </MovieGrid>
    </Layout>
  );
}
