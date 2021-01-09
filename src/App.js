import React, { useState } from 'react';

import { Calculator, Button, ResetButton, OutputButton, NegationButton } from './components';
import { outputContext } from './outputContext'


function App() {
  const [output, setOutput] = useState(0);
  const [currentInput, setCurrentInput] = useState();
  const [error, setError] = useState();


  return (
    <outputContext.Provider
      value={{ currentInput, setCurrentInput, setOutput, output, error, setError }}>
      <Calculator>
        <ResetButton value="AC" variant="light" />
        <NegationButton value="+/-" variant="light" />
        <Button value="%" variant="light" />
        <Button value="/" variant="orange" />
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="X" variant="orange" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" variant="orange" />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" variant="orange" />
        <Button value="0" colSpan={2} smallRadius />
        <Button value="." />
        <OutputButton value="=" variant="orange" />
      </Calculator>
    </outputContext.Provider>
  );
}

export default App;
