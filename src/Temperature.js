import React, { Component } from 'react'
import { LabelButton } from './Const';

export class Temperature extends Component {
    constructor(props){
        super(props);
        this.state = {
            temper:0,
            changeButton: LabelButton.fah
        }
    }

    toFahrenheit(){
        this.setState({
            temper: (this.state.temper*9/5)+32
        })
    }
    toCelcius(){
        this.setState({
            temper: (this.state.temper-32)*5/9
        })
    }

    fahButton=()=>{
        this.setState({
            changeButton: LabelButton.cel
        })
    }

    handleChange = (param) =>{
        let action
        switch (param) {
            case LabelButton.fah:
                action = this.toFahrenheit()
                this.setState({
                    changeButton: LabelButton.cel
                })
                break;
            case LabelButton.cel:
                action = this.toCelcius()
                this.setState({
                    changeButton: LabelButton.fah
                })
                break;
            default:
                break;
        }
        return action
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.setState({temper:e.target.value})} placeholder='Temperature in Celcius'/>
                <button onClick={(val)=>this.handleChange(this.state.changeButton)}>{this.state.changeButton}</button>
                <div className="result">
                    <h2>{this.state.temper}<span>{'\u00b0'}</span></h2>
                </div>
            </div>
        )
    }
}

export default Temperature
