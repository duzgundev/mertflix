import { HeartIcon } from '@heroicons/react/solid';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.base}>
      <span>Made with&nbsp;</span>
      <HeartIcon fill="red" width="24" />
      <span>&nbsp;by&nbsp;</span>
      <a
        href="https://twitter.com/duxgun"
        target="_blank"
        className="text-gray-300 underline"
      >
        Mert Duzgun
      </a>
    </footer>
  );
}
