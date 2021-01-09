import React, { useContext } from 'react';
import { outputContext } from '../../outputContext';

export const ResetButton = ({ value, variant }) => {
  const { setCurrentInput, setOutput } = useContext(outputContext);

  const handleClick = () => {
    setCurrentInput(null);
    setOutput(null);
  }

  const variantClass = variant && `button--${variant}`;
  return <button className={`button ${variantClass}`} onClick={handleClick}>{value}</button>;
}
