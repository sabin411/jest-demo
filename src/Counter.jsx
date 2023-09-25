import React, { useState } from "react";

const Counter = ({ val }) => {
  const [count, setCount] = useState(val);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  //data-testid is an attribute to locate and select elements during testing using tools like Jest and the @testing-library/react testing library.
  return (
    <div>
      Count: <h1 data-testid="counter">{count}</h1>
      <button data-testid="increase-button" onClick={increaseCount}>
        Increase
      </button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
export default Counter;
