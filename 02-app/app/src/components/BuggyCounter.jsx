import React, { useState } from 'react';

function ErrorBoundary() {
    const [count, setCount] = useState(0);

    if(count==5){
        throw new Error("Counter crashed");
    }

  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={()=> setCount(count+1)}>
            Increase
        </button>
    </div>
  );
}

export default ErrorBoundary;