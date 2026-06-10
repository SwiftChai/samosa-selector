import './App.css';
import { useState } from 'react';

/* Adds counter to samosa image, +1 with every click */
const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function updateCount() {
    setCount(count + multiplier);
  }

  function buyDoubleStuffed() {
    if (count >= 10) {
      setCount(count - 10)
      setMultiplier(multiplier * 2);
    }
  }
    function buyPartyPack() {
    if (count >= 100) {
      setCount(count - 100)
      setMultiplier(multiplier * 5);
    }
  }
    function buyFullFeast() {
    if (count >= 1000) {
      setCount(count - 1000)
      setMultiplier(multiplier * 10);
    }
  }

  return (
    <div className="App"> {/* Image and headlines */}
      <div className="Header">  
        <h1>Samosa Selector</h1> 
        <h2>Count: {count}</h2>
        <img className="samosa" src="src/assets/img/samosa.png" onClick={updateCount} alt="samosa"/>
      </div>
      {/* Upgrade options */}
      <div className="container">
        <div className="upgrade">  
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2 samosas per click!</p>
          <button className="button" onClick={buyDoubleStuffed}>Cost: 10 Samosas</button>
        </div>
        <div className="upgrade">  
          <h3>Party Pack 🎉</h3>
          <p>5 samosas per click!</p>
          <button className="button" onClick={buyPartyPack}>Cost: 100 Samosas</button>
        </div>
        <div className="upgrade">  
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10 samosas per click!</p>
          <button className="button" onClick={buyFullFeast}>Cost: 1000 Samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;