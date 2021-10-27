import React from 'react';
import './Streak.css'
import { useState } from 'react';


function Streak () {
    const [count, setCount] = useState(0);
  
    return (
      <div className="streak-counter-btn">
        {
          // if else statement to determine color of the counter
        }
        <h1>Streak Counter</h1>
        <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
          {count}
        </h1>
        <div className="button__wrapper">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    );
  }
 
  
export default Streak;