import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    updateNumber1(val) {
        this.setState({
            number1: Number(val)
        })
    }
    updateNumber2(val) {
        this.setState({
            number2: Number(val)
        })
    }
    sum() {
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={e => this.updateNumber1(e.target.value)}></input>
                <input className='inputLine' onChange={e => this.updateNumber2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.sum()}></button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        );
    }
}
export default Sum;