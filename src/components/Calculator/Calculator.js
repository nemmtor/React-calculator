import React from 'react';

import styles from './styles.module.scss'

export const Calculator = ({ children }) => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__output}>OUTPUT</div>
      <div className={styles.calculator__buttons}>
        {children}
      </div>
    </div>
  )
}
