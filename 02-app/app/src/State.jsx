import React, { useState } from 'react'



function State() {
    const [count, setCount] = useState(0);
  return (
    <>
        <div> the count is {count} </div>
        <button onClick={()=>{setCount(count+1)}}> update count </button>
    </>
  )
}

export default State

/*setcount thi count ni value update kariye to jya count use kariye count ne update karse em
useState declares a state variable that you can update directly.
setCount no use update the count variable*/