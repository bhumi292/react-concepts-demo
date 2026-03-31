import React, { useEffect } from 'react';

function Timer() {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("running..");
        }, 1000);

        return () => {
            console.log("Cleanup: Timer stopped");
            clearInterval(interval);
        };
    }, []);
  return (
    <div>timer started</div>
  )
}

export default Timer; 