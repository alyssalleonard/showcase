import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }
    sortArray() {
        let userInputArray = this.state.userInput.split(',');
        let evenArray = []
        let oddArray = []
        for(let i=0; i<userInputArray.length; i++) {
            if(userInputArray[i] % 2 === 0) {
                evenArray.push(userInputArray[i])
            } else {
                oddArray.push(userInputArray[i])
            }
        }
        this.setState({
            evenArray: evenArray,
            oddArray: oddArray
        })
    }
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'> 
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={e => this.updateUserInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.sortArray()}>Split</button>
                <span className='resultsBox'>{this.state.evenArray.join(', ')}</span>
                <span className='resultsBox'>{this.state.oddArray.join(', ')}</span>
            </div>
        );
    }
}
export default EvenAndOdd;