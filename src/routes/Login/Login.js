import { useState } from 'react';
import { useHistory } from 'react-router';

import Button from '@components/Button';

import firebase from '@utils/firebase';

import styles from './Login.module.scss';

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
    <form className={styles.form} onSubmit={handleLogin}>
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button>Sign In</Button>
    </form>
  );
}
