import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{
                name: 'Alyssa',
                age: 27,
                gender: 'female'
            },{
                name: 'Gareth',
                age: 28,
                gender: 'male'
            },{
                name: 'Demi',
                age: 3,
                gender: 'female'
            },{
                name: 'Fitz',
                gender: 'male'
            },{
                name: 'Piers',
                gender: 'male'
            }],
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
        let tempArray = []
        this.state.unFilteredArray.forEach(obj => {
            if(this.state.userInput in obj) {
                tempArray.push(obj) 
            }
        })
        this.setState({
            filteredArray: tempArray
        })
    }
    render() {
        return (
            <div className='puzzleBox filterObjectPB'> 
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={e => this.updateUserInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterArray()}>Filter</button>
                <span className='resultsBoc filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}
export default FilterObject;