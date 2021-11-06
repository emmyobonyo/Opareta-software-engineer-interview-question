import React, { useState } from 'react';
import Display from './Display';
import './App.css';

function App() {
  const [input, setInput] = useState();
  const display = () => {
    const formInput = document.getElementById('input').value;
    setInput(() => formInput);
  };
  return (
    <div className="App">
      <form>
        <input id="input" type="text" placeholder="Enter Something" />
        <button id="button" type="button" onClick={display}>Enter</button>
      </form>
      <Display input={input} />
    </div>
  );
}

export default App;
