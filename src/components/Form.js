import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'React'
      }
    }

    handleUserName = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }
    

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Name : </label>
                <input type="text" value={this.state.username} onChange={this.handleUserName}/>
            </div>
            <div>
                <label> Comments : </label>
                <textarea value={this.state.comment} onChange={this.handleComment} />
            </div>
            <div>
                <label> Topic : </label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Html">HTML</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      
    )
  }
}

export default FormComponent
