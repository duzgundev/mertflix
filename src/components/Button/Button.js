import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

export default function Button({
  className,
  size = 'normal',
  theme = 'primary',
  disabled,
  children,
  ...otherProps
}) {
  return (
    <button
      className={cx(
        styles.base,
        styles[theme],
        { [styles[size]]: size !== 'normal' },
        className
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}
