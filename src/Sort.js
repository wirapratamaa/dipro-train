import './App.css';
import React, { Component } from 'react'
import { mappingNumber } from './utils';
class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digit: '',
            ans: [],
            color: 'black',
            background: '',
            isScrollDown: false
        }
    }
    changeCol(){
        this.setState({
            color: 'red'
        })
        console.log('tes')
    }

    disableColor(){
        this.setState({
            color: 'black'
        })
        console.log('tes disable color')
    }
      
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll)
    }
    handleScroll=()=>{
        this.setState({
            isScrollDown : window.pageYOffset > 0 ? true : false
        })
        console.log('berubah')
       
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }

    sortNumber = (param) => {        
        let {digit} = this.state
        let digitNumber = mappingNumber(digit)
        const sorted = digitNumber.sort((a, b) =>{
            let d = param === 'asc' ? a-b : b-a
            return d
        })
        this.setState({
            ans:sorted.join(' ')
        })
    }

    render() {
        let {ans, color, isScrollDown} = this.state
    return (
    <div>
        <div className="container"  onScroll={this.handleScroll} style={{ background: isScrollDown?'red' : 'white' }}>

        </div>
        <input 
            type="text" 
            onChange={(e) => this.setState({digit:e.target.value})}
            value={this.state.digit}
            
        />
        <button onClick={() => this.sortNumber('asc')}>Sort Asc</button>
        <button onClick={() => this.sortNumber('desc')}>Sort Dsc</button>
        {/* <h2>{ans}</h2> */}
        <input 
            onFocus={(e) => this.changeCol(e) }
            onBlur={(e) => this.disableColor(e)}
            style={{ 
                color: this.state.color,
                border: 'none'
            }}
            value={color === 'red' ? ans.toString().replaceAll("7", "&") : '*****'}
            readOnly
        />
        <h1>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
            making this the first true generator on the Internet. 
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
            to generate Lorem Ipsum which looks reasonable. 
            The generated Lorem Ipsum is therefore always free from repetition, 
            injected humour, or non-characteristic words etc.

            
        </h1>
    </div>

    )}
}

export default Sort;