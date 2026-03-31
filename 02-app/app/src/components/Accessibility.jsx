import React, { useState } from 'react'

function Accessibility() {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;

        if(!name) {
            setError("name is required");
        } else {
            setError("");
            alert("form submitted");
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id="name" name='name' type='text' aria-required="true"/>
        {error && (
            <p role="alert" style={{color:"red"}}>
                {error}
            </p>
        )}

        <button type='submit'>submit</button>
    </form>
    
  );
}

export default Accessibility