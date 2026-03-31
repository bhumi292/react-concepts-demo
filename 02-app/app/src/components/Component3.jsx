import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';



function Component3() {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>Component 3</h1>
        <h2>Hello {user.name}</h2>
        <p>ID: {user.id}</p>
    </div>
  );
}

export default Component3;