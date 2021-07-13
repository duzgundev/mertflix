import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '@components/Layout';
import Button from '@components/Button';

import firebase from '@utils/firebase';

import styles from './Register.module.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
      });
      history.push('/favorites');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <form className={styles.form} onSubmit={handleRegister}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button>Sign Up</Button>
      </form>
    </Layout>
  );
}
