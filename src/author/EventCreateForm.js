import React, { Component } from 'react' 
// import Hobby from "../models/Hobby"

export default class EventCreateForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         newEvent: props.event ,
        //  hobbies: props.hobby
      }
    } 

 
//  componentDidMount(){
//  this.loadHobbyList()
//  }

//  loadHobbyList = () => {
//  Axios.get("hobby/index")
//  .then(response => {
//      console.log(response.data.hobbies)
//      this.setState({
//      hobbies: response.data.hobbies
//      })
//  })
//  .catch(error => {
//      console.log("Error fetching Hobbies")
//      console.log(error)
//  })
//  }

//     handleChange = (event) => {
//         const attributeToChange = event.target.name
//         const newValue = event.target.value
//         const eventt={...this.state.newEvent}
//         eventt[attributeToChange] = newValue
//         this.setState({
//             newEvent: eventt
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.addEvent(this.state.newEvent)
//     }

  render() { 
    // const allHobbies = this.state.hobbies.map((hobby, index) => 
    // <tr key={index}>
    // <Hobby {...eventt} ></Hobby>
    // {this.loadHobbyList()}
    // </tr>
    // )
      console.log(this.state.newEvent)
    return (
      <div>
          <h1>Create Event</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input name='name' type='text' onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Upload Photo</label>
                <input name='photo' type='text' onChange={this.handleChange}></input>
            </div> 

            <div>
                <label>Description</label>
                <input name='description' type='text' onChange={this.handleChange}></input>
            </div>

            <div>
                <label>General Location</label>
                <input name='generalLocation' type='text' onChange={this.handleChange}></input>
            </div> 

            <div>
                <label>Precise Location</label>
                <input name='preciseLocation' type='text' onChange={this.handleChange}></input>
            </div> 

            <div>
                <label>Date and Time</label>
                <input name='dateAndTimes' type='datetime-local' onChange={this.handleChange}></input>
            </div> 

            <div>
                <label>Max Participants</label>
                <input name='maxParticipants' type='number' onChange={this.handleChange}></input>
            </div> 

            <div>
                <label>Hobby Tags</label>
                <input name='hobbyTags' type='number' onChange={this.handleChange}></input>
            </div> 


            <div>
                <input type="submit" value="CREATE"></input>
            </div>

          </form>
      </div>
    )
  }
}
