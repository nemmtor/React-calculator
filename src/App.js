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
    <ValueButton value={4} />
    <ValueButton value={5} />
    <ValueButton value={6} />
  </Calculator>);
}

export default App;
