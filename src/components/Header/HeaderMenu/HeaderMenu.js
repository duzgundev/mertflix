import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '@utils/auth';
import { SearchContext } from '@utils/search';
import firebase from '@utils/firebase';

import Button from '@components/Button';
import { SearchIcon } from '@heroicons/react/outline';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  const { currentUser } = useContext(AuthContext);
  const { setSearchString } = useContext(SearchContext);
  const history = useHistory();

  const menuItems = [
    {
      path: '/',
      name: 'Home',
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

  function handleSearch(event) {
    setSearchString(event.target.value);
    history.push('/search');
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

      <div className={styles.controls}>
        <SearchIcon width="24" />
        <input
          className="h-8 ml-2 p-2 rounded-sm"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
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
