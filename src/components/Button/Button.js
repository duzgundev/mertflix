import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

export default function Button({ className, theme }) {
  return (
    <button className={cx(styles.base, styles[theme], className)}>
      Button
    </button>
  );
}
