import Header from '@components/Header';
import Footer from '@components/Footer';

import cx from 'classnames';

import styles from './Layout.module.scss';

export default function Layout({ mainClassName, children }) {
  return (
    <div className={styles.base}>
      <Header />
      <main className={cx('flex-grow', mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
