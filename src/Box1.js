import React from 'react'
import './stylesheet.css'

const Box1 = () => {
  return (
    <div className='whole'>
        <div className='line'>This is created using Functional Component</div>
        <div className='line1'>This is done using external CSS</div>
        <div style={{color:"purple"}}>This is done using inline CSS</div>
    </div>
  )
}

export default Box1