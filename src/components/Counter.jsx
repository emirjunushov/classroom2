import React, { useState } from "react";

const Counter = ({ increment, counter, decrement }) => {
  return (
    <div>
      <button onClick={increment}>-</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>+</button>
    </div>
  );
};

export default Counter;
