import React, { Component } from 'react'

export default class EventOnClassComponent extends Component {

    clickHandler() {
        console.log('button Clicked')
    }

  render() {
    return (
      <div>
        <button onClick = {this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
