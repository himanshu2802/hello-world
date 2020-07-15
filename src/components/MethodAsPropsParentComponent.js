import React, { Component } from 'react'
import MethodAsPropsChildComponent from './MethodAsPropsChildComponent'

class MethodAsPropsParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    // Without Getting value from child component
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    // Getting value from child component
    greetParent(value){
        alert(`Hello ${value} from ${this.state.parentName}`)
    }
    

  render() {
    return (
      <div>
        <MethodAsPropsChildComponent greetHandler = {this.greetParent}></MethodAsPropsChildComponent>
      </div>
    )
  }
}

export default MethodAsPropsParentComponent
