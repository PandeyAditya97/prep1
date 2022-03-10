import React, {Component} from 'react'
import Box1 from './Box1'
import Box2 from './Box2'

class App extends Component  { 
    constructor(){
      super();
      this.state={
        clsClick:false,
        fncClick:false
      }
    }
    render(){
      return (
          <>
        <h1 className='primary'>Styling using Functional and Class Component</h1>
        <button className='func' onClick={()=>this.setState({fncClick:!this.state.fncClick })}>To see styling in function compnonent</button>
          <button className='cls' onClick={()=>this.setState({clsClick:!this.state.clsClick })}>To see styling in class compnonent</button>
         {this.state.fncClick ? <Box1 /> :null}
         {this.state.clsClick ?  <Box2 />:null}
        </>
      )
    }     
}

 export default App