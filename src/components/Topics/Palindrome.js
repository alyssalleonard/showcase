import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }
    checkPalindrome() {
        this.setState({
            palindrome: this.state.userInput === this.state.userInput.split('').reverse().join('')
        })
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={e => this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.checkPalindrome()}></button>
                <span className='resultsBox'>{`${this.state.palindrome}`}</span>
            </div>
        );
    }
}
export default Palindrome;