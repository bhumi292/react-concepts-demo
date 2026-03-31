import React from 'react'
import Portal from './components/Portal'

function Modal({close}) {
  return (
    <Portal>
        <div style={{
            position:"fixed",
            top:"40%",
            left: "40%",
            background: "white",
            padding: "20px",
            border: "1px solid black"
        }}>
            <h2>hello</h2>
            <button onClick={close}>Close</button>
        </div>
    </Portal>
  );
}

export default Modal;