import './App.css';
import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 99
        }
    }
    setOperation = (param) =>{
        let {count} = this.state
        switch (param) {
            case 'minus':
                this.setState({
                    count : count - 1
                })
                break;
            case 'plus':
                this.setState({
                    count : count + 1
                })
                break;
            default:
                break;
        }

    }
    validation = (param) => {
        let {count} = this.state
        let d = false
        switch (param) {
            case 'minus':
                d=count > 0 ? true : false
                break;
            case 'plus':
                d=count > 100 && count%2===0 ? true : false
                break;
            default:
                break;
        }
        return d
    }

    render() {

      let {count} = this.state;
    return <div>
        <button onClick={()=> this.validation('minus') ? this.setOperation('minus') : null}>-</button>
        <button onClick={()=> this.setOperation('plus')}>+</button>
        <h2 className={this.validation('plus') && 'text-danger' }>{count}</h2>        
    </div>;
  }
}

export default Counter;
