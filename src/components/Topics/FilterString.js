import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['apple', 'banana', 'strawberry'],
            userInput: '',
            filteredArray: []
        }
    }
    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }
    filterArray() {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(str => str.includes(this.state.userInput))
        }) 
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'> 
                <h4>Filter String</h4>
                <span className='puzzleText'>{this.state.unFilteredArray.join(', ')}</span>
                <input className='inputLine' onChange={e => this.updateUserInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterArray()}></button>
                <span className='resultsBox filterStringPB'>{this.state.filteredArray.join(', ')}</span>
            </div>
        );
    }
}
export default FilterString;