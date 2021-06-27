import { useState } from 'react';
import { useHistory } from 'react-router';

import Layout from '@components/Layout';

import firebase from '@utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/favorites');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </Layout>
  );
}
