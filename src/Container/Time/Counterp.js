
import React, { Component } from 'react';

class Counterp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter :0
        }
    }
    increment = () => {
        if (this.state.counter < 10) {
            this.setState({
              counter : ( this.state.counter + 1)
            })
        }
    }

    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter : (this.state.counter -1)
            })
        }
    }
    
    render() {
        return (
            <div>
               <button onClick={() => this.increment()}>+</button>
               <span>{this.state.counter}</span>
               <button onClick={() => this.decrement()}>-</button> 
            </div>
        );
    }
}

export default Counterp;