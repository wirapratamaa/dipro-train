import React, { Component } from 'react'

export class Section extends Component {
    constructor(props){
        super(props);
        this.state = {
            background: 'white',
            isScrolldown: false,
            current: 1
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () =>{ 
        var sections = document.querySelectorAll('section')
        const sectionMargin = 150
        //scroll spy
        const current = sections.length - [...sections].reverse().findIndex((section) => 
        window.scrollY >= section.offsetTop - sectionMargin ) - 1
        this.setState({
            current
        })

        console.log('babi'+current)
    }


    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }

    getActive(parameter){
        let{current} = this.state
        console.log(current)
        let colorD = current===parseInt(parameter) ? 'active': ''
        console.log(colorD)
        return colorD
    }


    render() {
        
        return (
            <div>
                <section onScroll={this.handleScroll} className={"container-section "+this.getActive(1)}>
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
                </section>
                <section className={"container-section "+this.getActive(2)} onScroll={this.handleScroll}>
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
                </section>
                <section id='section3' className={"container-section "+this.getActive(3)} onScroll={this.handleScroll}>
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
                </section>
                <section id='section4' className={"container-section "+this.getActive(4)}>
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
                </section>
                <section id='section5' className={"container-section "+this.getActive(5)}>
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
                </section>
                <section id='section6' className={"container-section "+this.getActive(6)}>
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
                </section>
            </div>
        )
    }
}

export default Section
