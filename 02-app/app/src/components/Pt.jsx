import React from 'react';
import PropTypes from "prop-types";

function Pt({name, age}) {
  return (
    <div>
        <h2>name: {name}</h2>
        <p>age: {age}</p>
    </div>
  );
}

Pt.PropTypes = {
    name: PropTypes.string.isRequired,
    age : PropTypes.number
};
function App() {
  return (
    <>
      <User name={123} age={22} />
    </>
  );
}
export default Pt;