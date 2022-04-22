import React, { Component } from 'react'

export default class AuthorEditForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           newAuthor: props.author
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

          this.props.editAuthor(this.state.newAuthor)
      }

      
  
    render() {
        console.log(this.state.newAuthor)
      return (
        <div>
            <h1>Edit Author</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Name</label>
                  <input name='name' type='text' onChange={this.handleChange} value={this.state.newAuthor.name}></input>
              </div>
  
              <div>
                  <label>Email Address</label>
                  <input name='emailAddress' type='text' onChange={this.handleChange} value={this.state.newAuthor.emailAddress}></input>
              </div>
  
              <div>
                  <label>Phone Number</label>
                  <input name='phoneNumber' type='number' onChange={this.handleChange} value={this.state.newAuthor.phoneNumber}></input>
              </div>
  
              <div>
                  <input type="submit" value="Edit Author"></input>
              </div>
  
            </form>
        </div>
      )
    }
}
