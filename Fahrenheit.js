import React, { Component } from 'react';

class Fahrenheit extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <h3>Fahrenheit={(this.props.info *1.8+32)}</h3>
            </div>
        );
    }
}

export default Fahrenheit;