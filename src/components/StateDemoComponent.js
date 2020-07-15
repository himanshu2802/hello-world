import React, {Component} from 'react';

class StateDemoComponent extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you from Subscribing"
        })
    }

    render() {
        return(
            <div>
                <h1>
                    {this.state.message }
                </h1>
                <button onClick= {() => this.changeMessage()}>Subscribe</button>
            </div>
            
        )

    }
}

export default StateDemoComponent