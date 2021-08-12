import { useContext } from 'react';
import cx from 'classnames';
import { Link, useHistory } from 'react-router-dom';

import { Menu } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/solid';
import Button from '@components/Button';

import { AuthContext } from '@utils/auth';
import firebase from '@utils/firebase';

export default function HeaderMenuMobile({ className }) {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  async function handleLogout() {
    await firebase.auth().signOut();
    history.push('/');
  }

  return (
    <Menu as="div" className={cx(className, 'relative flex z-10 lg:hidden')}>
      <Menu.Button className="">
        <UserCircleIcon width="48" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-12 w-56 flex flex-col mt-2 rounded bg-black">
        <Menu.Item>
          {({ active }) => (
            <Link
              className={cx('rounded py-4 px-8', { 'bg-blue-500': active })}
              to="/"
            >
              Home
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={cx('rounded py-4 px-8', { 'bg-blue-500': active })}
              to="/favorites"
            >
              Favorites
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          <div className="flex flex-col p-2">
            {!!currentUser ? (
              <Button className="w-full" onClick={handleLogout}>
                Sign Out
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button className="w-full">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button theme="outline" className="w-full mt-4">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
