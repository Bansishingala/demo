import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
         this.state = {
             Count : new count ()
         }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Count;