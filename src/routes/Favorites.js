import React from 'react';
import firebase from '../utils/firebase';

export default function Favorites() {
  const displayName = firebase.auth().currentUser.displayName;
  return <div>{`Welcome ${displayName}`}</div>;
}
