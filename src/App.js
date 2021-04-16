import React from 'react';

import IntuitFSM from './IntuitFSM/IntuitFSM';
import './App.scss';

function App(props) {
  return (
    <>
      <header className="app-header">
        <h1>Intuit Language FSM</h1>
      </header>

      <main className="app-main">
        <IntuitFSM />
      </main>
    </>
  );
}

export default App;
