import React, { Component } from 'react';

class Celcius extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <h3>Celcius={-(this.props.info)}</h3>
            </div>
        );
    }
}

export default Celcius;