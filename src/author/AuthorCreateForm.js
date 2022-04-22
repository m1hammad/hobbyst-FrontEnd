import React, { Component } from 'react'

export default class AuthorCreateForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         newAuthor: {}
      }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const author ={...this.state.newAuthor}
        author[attributeToChange] = newValue
        this.setState({
            newAuthor: author
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAuthor(this.state.newAuthor)
    }

  render() {
      console.log(this.state.newAuthor)
    return (
      <div>
          <h1>Create Author</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input name='name' type='text' onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Email Address</label>
                <input name='emailAddress' type='text' onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Phone Number</label>
                <input name='phoneNumber' type='number' onChange={this.handleChange}></input>
            </div>

            <div>
                <input type="submit" value="Add Author"></input>
            </div>

          </form>
      </div>
    )
  }
}
