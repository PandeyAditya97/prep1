import React from "react";
import "./stylesheet.css"

class Box2 extends React.Component
{
    render(){
        return(
            <div className='whole'>
        <div className='line'>This is created using Class Component</div>
        <div className='line1'>This is done using external CSS</div>
        <div style={{color:"purple"}}>This is done using inline CSS</div>
    </div>
        )
    }
}

export default Box2
