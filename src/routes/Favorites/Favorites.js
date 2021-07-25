import Layout from '@components/Layout';

import firebase from '@utils/firebase';

export default function Favorites() {
  const displayName = firebase.auth().currentUser.displayName;

  return (
    <Layout>
      <div>{`Welcome ${displayName}`}</div>
    </Layout>
  );
}
