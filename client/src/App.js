import React from 'react';
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/><p>From server: <span id="server"> </span></p>
      </header> */}
      <div className="infographicBlock">
        <Home />
      </div>
    </div>
  );
}

export default App;
