export const calculate = (digit1, digit2, operator) => {
  switch (operator) {
    case '+':
      return digit1 + digit2;
    case '-':
      return digit1 - digit2;
    case 'X':
      return digit1 * digit2;
    case '/':
      return digit1 / digit2;
    case '%':
      return digit1 % digit2;
    default:
      throw new Error('Wrong equation!');
  }
}
