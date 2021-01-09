import React, { useContext } from 'react';

import styles from './styles.module.scss'
import { outputContext } from '../../outputContext';

export const Calculator = ({ children }) => {
  const { currentInput, error } = useContext(outputContext);
  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__error}>{error}</div>
      <div className={styles.calculator__output}>{currentInput}</div>
      <div className={styles.calculator__buttons}>
        {children}
      </div>
    </div>
  )
}
