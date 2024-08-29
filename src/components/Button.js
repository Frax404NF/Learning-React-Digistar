import React, { useState } from 'react';
import './Button.css';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
