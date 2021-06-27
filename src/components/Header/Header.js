import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.base}>
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
}
