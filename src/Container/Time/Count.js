import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);

        this.state={
            counter : 0
        }
        this.Increment = () =>{
            this.setState({counter:this.state.counter + 1})
        }
        this.Decrement = () =>{
            this.setState({counter:this.state.counter - 1})
        }
        
    }
    
    render() {
        return (
            <div>
                
                <p className='counter'></p>
                counter :{this.state.counter}
                <button onClick={() => {this.Increment()}}>increment</button>
                <button onClick={() => {this.Decrement()}}>decrement</button>

            </div>
            
        );
    }
}

export default Count;