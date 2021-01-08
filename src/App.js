import React from 'react';

import { Calculator, OperationButton, ValueButton } from './components';

function App() {
  return (<Calculator>
    <ValueButton value={7} />
    <ValueButton value={8} />
    <ValueButton value={9} />
    <OperationButton operator={"X"} />
    <ValueButton value={4} />
    <ValueButton value={5} />
    <ValueButton value={6} />
    <OperationButton operator={"-"} />
    <ValueButton value={1} />
    <ValueButton value={2} />
    <ValueButton value={3} />
    <OperationButton operator={"+"} />
    <ValueButton value={0} colSpan={2} />
    <OperationButton operator={"."} />
    <OperationButton operator={"="} />
  </Calculator>);
}

export default App;
