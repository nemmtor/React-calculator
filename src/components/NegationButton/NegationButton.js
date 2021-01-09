import React, { useContext } from 'react';
import { outputContext } from '../../outputContext';
import { couldBeNumber } from '../../helpers';

export const NegationButton = ({ value, colSpan, variant, }) => {
  const { currentInput, setCurrentInput } = useContext(outputContext);

  const variantClass = variant && `button--${variant}`;

  if (colSpan) {
    return <button className={`button button--colspan-${colSpan} ${variantClass}`}>{value}</button>
  }

  const handleClick = () => {
    const valueIsNumber = couldBeNumber(value);

    // User enters operator without any digits on screen
    if (!currentInput && !valueIsNumber) {
      return;
    }

    const lastChar = currentInput.slice(-1);
    const lastCharIsNumber = couldBeNumber(lastChar);
    if (!lastCharIsNumber) {
      return;
    }

    let currentIndex = currentInput.length - 2;
    const currentInputArray = [...currentInput];
    while (currentIndex) {
      const currentChar = currentInputArray[currentIndex];
      if (currentChar === '-') {
        const prevChar = currentInputArray[currentIndex - 1];
        if (!couldBeNumber(prevChar)) {
          currentInputArray.splice(currentIndex, 1);
          break;
        }
        currentInputArray.splice(currentIndex, 1, '+');
        break;
      }
      if (currentChar === '+') {
        currentInputArray.splice(currentIndex, 1, '-');
        break;
      }
      if (!couldBeNumber(currentChar)) {
        currentInputArray.splice(currentIndex + 1, 0, '-');
        break;
      }
      currentIndex -= 1;
    }
    setCurrentInput(currentInputArray.join(''));
  }
  return <button
    className={`button ${variantClass}`} onClick={handleClick}>{value}</button>;
};
