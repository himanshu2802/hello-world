import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   For Approach Three
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // For Approach one and two
    // clickHandler() {
    //     this.setState({
    //        message: 'Good Bye !'
    //     })
    // }

    // For approach four
    clickHandler = () => {
        this.setState({
            message:'Goodbye !'
        })
    }
    

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        {/* Approac one- Binding in the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>CLICK</button> */}

        {/* Approach two- Use arrow function in the render method */}
        {/* <button onClick={() => this.clickHandler()}>CLICK</button> */}

        {/* Approach Three - Binding the event handler in the constructor (RECOMMENDED) */}
        {/* <button onClick={this.clickHandler}>CLICK</button> */}

        {/* Approach Four - Class property as arrow function  (RECOMMENDED)*/}
        <button onClick={this.clickHandler}>CLICK</button>
      </div>
    )
  }
}
