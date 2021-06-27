import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '@utils/auth';
import firebase from '@utils/firebase';

import Button from '@components/Button';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const menuItems = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/browse',
      name: 'Browse',
    },
    {
      path: '/favorites',
      name: 'Favorites',
    },
  ];

  async function handleLogout() {
    await firebase.auth().signOut();
    history.push('/');
  }

  return (
    <div className={styles.base}>
      <ul className={styles.links}>
        {menuItems.map((item, index) => (
          <li className={styles.link} key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.buttons}>
        {!!currentUser ? (
          <Button className={styles.button} onClick={handleLogout}>
            Sign Out
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button className={styles.button}>Sign In</Button>
            </Link>
            <Link to="/register">
              <Button theme="outline" className={styles.button}>
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
