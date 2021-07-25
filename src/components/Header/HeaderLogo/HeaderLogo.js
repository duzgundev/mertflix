import Logo from '@images/logo.png';

import { Link } from 'react-router-dom';

import styles from './HeaderLogo.module.scss';

export default function HeaderLogo() {
  return (
    <Link to="/">
      <img className={styles.base} src={Logo} />
    </Link>
  );
}
