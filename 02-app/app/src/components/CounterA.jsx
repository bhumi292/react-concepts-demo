import React from 'react'
import UseCounter from '../Hooks/UseCounter'

function CounterA() {
    const { count, increment, decrement } = UseCounter(0);
  return (
    <div>
      <h2>Counter A</h2>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterA;