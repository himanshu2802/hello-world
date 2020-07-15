import React, { Component } from 'react'

class SetStateDemoComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment() {
        this.setState ({
            count: this.state.count + 1
        }
        // if you want anything to execute after the state has been changed, pass second argument to setState function
        ,
        () => console.log('Call back Value : ',this.state.count) )

        console.log(this.state.count)
    }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick = {() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default SetStateDemoComponent
