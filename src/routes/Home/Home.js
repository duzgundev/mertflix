import Layout from '@components/Layout';
import Movies from '@containers/Movies';

import TMDB from '@utils/tmdb';

export default function Home() {
  return (
    <Layout>
      <Movies />
    </Layout>
  );
}
