import React, { Component } from 'react'

 class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    

  render() {

    //If - else approach
    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>
    //         Welcome Himanshu 
    //     </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //         Welcome Guest 
    //     </div>
    //     )
    // }

    //Using Element variables
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Himanshu</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>


    //Ternary Conditional Operator Approach (RECOMMENDED)
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Himanshu</div> :
    //     <div>Welcome Guest</div>
    // )


    //Short Curcit Operator Approach (RECOMMENDED)
    return this.state.isLoggedIn && <div>Welcome Himanshu</div>
    
    
  }
}

export default ConditionalRendering
