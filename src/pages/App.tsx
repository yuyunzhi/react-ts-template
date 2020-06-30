import React from 'react';
import './App.css';
import classNames from 'classnames';

function App() {
  return (
    <div className={classNames('App')}>
      <header className={classNames({'App-header':true})}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
