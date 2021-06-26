import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleRegister() {
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
    <div>
      <form onSubmit={(e) => e.preventDefault() && false}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={handleRegister}>Sign Up</button>
      </form>
    </div>
  );
}
