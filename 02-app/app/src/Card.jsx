import React from 'react'
import "./Card.css"

const card = ({title,des}) => {
  return (
    <div className='card'>
        <img src="https://img.freepik.com/
        free-photo/computer-program-coding-screen_53876-138060.jpg?
        semt=ais_hybrid&w=740&q=80" alt="" width={150}
        style={{border:"2px solid black"}}/>
        <h1>{title}</h1>
        <p>{des}</p>
    </div>
  )
}

export default card