import cx from 'classnames';

import styles from './MovieGrid.module.scss';

export default function MovieGrid({ className, children }) {
  return <div className={cx(styles.base, className)}>{children}</div>;
}
