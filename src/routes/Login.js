import React, { useState } from 'react';
import { useHistory } from 'react-router';
import firebase from '../utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin() {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/browse');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault() && false}>
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
        <button onClick={handleLogin}>Sign In</button>
      </form>
    </div>
  );
}
