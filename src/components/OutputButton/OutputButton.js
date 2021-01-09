import React, { useContext } from 'react';
import { outputContext } from '../../outputContext';
import { calculate, couldBeNumber } from '../../helpers';


export const OutputButton = ({ value, variant }) => {
  const { currentInput, setCurrentInput, setError } = useContext(outputContext);

  const handleClick = () => {
    if (!currentInput) return;

    const numbers = [];
    const operators = [];
    let possibleNumber = '';
    let collectingDigits = true;
    let negate = false;
    let nextNumWillNegate = false;
    [...currentInput].forEach(char => {
      console.log('possibleNumber:', possibleNumber);
      if (!collectingDigits && couldBeNumber(char)) {
        if (!nextNumWillNegate) {
          numbers.push(+possibleNumber);
        }
        if (negate) {
          nextNumWillNegate = true;
          negate = false;
        }
        possibleNumber = '';
        collectingDigits = true;
      }

      if (!collectingDigits && !couldBeNumber(char)) {
        negate = true;
      }

      if (couldBeNumber(char)) {
        if (nextNumWillNegate) {
          possibleNumber += '-' + char;
          nextNumWillNegate = false;
        } else {
          possibleNumber += char;
        }
      } else {
        if (!negate) {
          operators.push(null);
          operators.push(char);
          collectingDigits = false;
        }
      }
    })

    numbers.push(+possibleNumber);
    console.log(numbers, operators);
    const output = numbers.reduce((prev, curr, currIndex) => {
      const operator = operators[currIndex];
      const nextOperator = operators[currIndex + 1];
      if (operator) {
        return calculate(prev, curr, operator)
      } else {
        return calculate(prev, curr, nextOperator)
      }
    })
    if (!isFinite(output)) {
      setError('Error! You cannot divide by 0!');
      setCurrentInput();
      setTimeout(() => {
        setError('');
      }, 1000);
    } else {
      setCurrentInput('' + output);
    }
  }

  const variantClass = variant && `button--${variant}`;
  return <button className={`button ${variantClass}`} onClick={handleClick}>{value}</button>;
}

