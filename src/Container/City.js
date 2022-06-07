import React, { Component } from 'react';

class City extends Component {
    constructor() {
        super();
        
        this.state ={
            changecity :'suart'
        }
    }
    changeCity = () => {
        this.setState({
            changecity :'Baroda'
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.changecity}</p>
                <button onClick={() => this.changeCity()}></button>
            </div>
        );
    }
}

export default City;