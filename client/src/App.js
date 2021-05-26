import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';


function App() {

  const [state, setState] = useState([])
  useEffect(() => {
    fetch('/api/v1.0/test').then(response => {
      if(response.status == 200){
        return response.json()
      }
    }).then(data => setState(data))
  
  },)
  console.log(state)

  return (
    <div className="App">
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Jacob
        </a>

      </div>
    </div>
  );
}

export default App;
