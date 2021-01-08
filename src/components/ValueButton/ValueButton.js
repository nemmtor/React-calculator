import React from 'react';

export const ValueButton = ({ value, colSpan }) => {
  return <button className={`col-span-${colSpan}`}>{value}</button>;
};
