import './App.css';
import React, { Component } from 'react'
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName:''
        }
    }
    
    setText = (ev) =>{
        console.log(ev)
        let lowerText = ev.target.value.toLowerCase()
        this.setState({
            fullName : lowerText
        })
    }
    render() {

      let {fullName} = this.state;
    return <div>
        <p>Hello, {fullName ? fullName : ''}</p>
        {/* event target */}
        <input type="text" onChange={(e)=>this.setText(e)}/>
    </div>;
  }
}

export default Welcome;
