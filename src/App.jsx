import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function updateCount() {
    setCount(count + multiplier);
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="src/assets/img/samosa.png" onClick={updateCount} alt="samosa"/>
      </div>

    </div>
  );
};

export default App;