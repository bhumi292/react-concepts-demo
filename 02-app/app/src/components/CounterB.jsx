import React from 'react'
import UseCounter from '../Hooks/UseCounter';

function CounterB() {
    const { count, increment, decrement } = UseCounter(10);
  return (
    <div>
      <h2>Counter B</h2>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterB;