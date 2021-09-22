import './App.css';
import React, { Component } from 'react'
import { LabelButton } from './Const';
import { elipsis, onlyNumber } from './utils';
class TextApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textButton: LabelButton.consume,
            datas: [], 
            isErr: true, 
            err : '',
            isLoading: true,
            limit: 10
        };
    }

    componentDidMount(){
        // this.apiGet();
        setTimeout(()=> this.apiGet(), 1000);
    }

    apiGet = () => {
        this.setState({isLoading:true})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(dataLists => {
                this.setState({ 
                    datas: dataLists, 
                    textButton : dataLists.length>0 ? LabelButton.reset : LabelButton.consume, 
                    isLoading: false
                })
        }).catch(e => {
            this.setState({
                isErr: true,
                err: 'Something went wrong',
                textButton: LabelButton.consume,
                isLoading: false
            })
        });
    }
    resetButton = () => {
        this.setState({ datas: [], textButton : LabelButton.consume})
    }

    validation = (param) => {
        let {isLoading} = this.state
        let action
        switch (param) {
            case LabelButton.consume:
                action = !isLoading ? this.apiGet() : null
                break;
            case LabelButton.reset:
                action = this.resetButton()
                break;
            default:
                break;
        }
        return action
    }

    setLimit = (ev) => {
        if (onlyNumber(ev.target.value)) {
            this.setState({
                limit:ev.target.value
            })
        }
    }

    render() {
    let {textButton, datas, isLoading, limit}= this.state
    return (
    <div>
        <button disabled={isLoading} onClick={(val) => this.validation(textButton) }>{textButton}</button>
        <input type="text" value={limit} onChange={(e) => this.setLimit(e)}/>
        {isLoading ? (<div><h2>Loading...</h2></div>) 
        : 
            <ul>
                {datas.length>0 && datas.map((data) => (
                    <li key={data.id}>{elipsis(data.title, limit)}</li>
                    ))}
            </ul>
        }
    </div>
    )
  }
}

export default TextApi;
