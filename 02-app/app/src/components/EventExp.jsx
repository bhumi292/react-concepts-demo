import React, { useState } from 'react'

function EventExp() {
    const [name, setName] = useState("");

    const handleClick = () =>{
        alert("button clicked");
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleMouseOver = () => {
        console.log("mouse over event");
    };

    const handleMouseOut = () => {
        console.log("mouse over event");
    };

    const handleDoubleClick = () => {
        alert("button double clicked");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted: " + name);
    };
  return (
    <div>
        <button onClick={handleClick}> click me </button><br/>
        <button onDoubleClick={handleDoubleClick}> double click me </button><br/>
        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>hover your mouse over this text</p><br/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter name' value={name} onChange={handleChange}/>
            <button type="submit">submit</button>
        </form>
    </div>
  );
}

export default EventExp