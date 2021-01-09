import React, { useContext } from 'react';
import { outputContext } from '../../outputContext';
import { couldBeNumber } from '../../helpers';

export const Button = ({ value, colSpan, variant }) => {
  const { currentInput, setCurrentInput } = useContext(outputContext);

  const variantClass = variant && `button--${variant}`;


  const handleClick = () => {
    const valueIsNumber = couldBeNumber(value);

    // User enters operator without any digits on screen
    if (!currentInput && !valueIsNumber) {
      return;
    }

    // User enters first digit
    if (!currentInput && valueIsNumber) {
      setCurrentInput(value);
      return;
    }

    const lastChar = currentInput.slice(-1);
    const lastCharIsNumber = couldBeNumber(lastChar);

    // There is already operator waiting for number but user enters another operator
    // So it swaps operators
    if (!lastCharIsNumber && !valueIsNumber) {
      setCurrentInput(prevInput => prevInput.slice(0, -1) + value);
      return;
    }

    const newInput = currentInput ? currentInput + value : value;
    setCurrentInput(newInput);
  }


  if (colSpan) {
    return <button className={`button button--colspan-${colSpan} ${variantClass}`}
                   onClick={handleClick}>{value}</button>
  }
  return <button
    className={`button ${variantClass}`} onClick={handleClick}>{value}</button>;
};
