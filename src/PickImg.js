import React, { Component } from 'react'

export class PickImg extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: [0],
            imgsName: '',
            isEnter:false
        }
    }
    previewImg=(ev)=>{
        let d = ev.target.files[0]
        this.setState({
            file: d ? URL.createObjectURL(d) : '',
            imgsName:d ? d.name : '',
            
        })
        console.log('babi')
    }

    convertTxt = (param) => {
        return param.replaceAll("e", "#")
    }

    // statefull
    valueChange=(ev)=>{
        if (ev.which===13) {
            this.setState({
                // imgsName: imgsName.replaceAll('e','#')
                isEnter: true
            })
        }console.log(ev)
    }

    render() {
        let {imgsName, isEnter,} = this.state
        return (
            <div>
                <input type="file" onChange={(e)=>this.previewImg(e)}/>
                <img src={this.state.file} alt={this.state.imgsName}/>   
                <input 
                    type="text" 
                    value={!isEnter ? imgsName: this.convertTxt(imgsName)} 
                    readOnly 
                    onKeyPress={(e)=>this.valueChange(e)}
                />
            </div>
        )
    }
}

export default PickImg
