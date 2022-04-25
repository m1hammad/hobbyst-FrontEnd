import React, { Component } from 'react' 
import { FormGroup } from 'react-bootstrap'
//import Hobby from "../models/Hobby"

export default function EventCreateForm(props){

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      newEvent: props.event ,
    //     //  hobbies: props.hobby
    //   }
    // } 

 
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
      <Container>
          <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" ></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control name="title" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Date and Time</Form.Label>
              <Form.Control name="dateAndTime" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Maximum Participants</Form.Label>
              <Form.Control name="maxParticipants" onChange={changeHandler}></Form.Control>
          </Form.Group>
          
          <Form.Group>
              <Form.Label>General Location</Form.Label>
              <Form.Control name="generalLocation" onChange={changeHandler}></Form.Control>
          </Form.Group>
          
          <Form.Group>
              <Form.Label>Precice Location</Form.Label>
              <Form.Control name="preciseLocation" onChange={changeHandler}></Form.Control>
          </Form.Group>
              
              
          <Form.Group>
              <Form.Label>Hobbies:</Form.Label> 
              {/* <select class="select" multiple> */}
              <Form.Select options={aquaticCreatures} className="select" name="hobby[]" onChange={changeHandler} multiple="" data-live-search="true">
                  {hobby.map((hobby, index) => (
                      <Form.Control key={index} >{hobby.name}</Form.Control>
                  ))} 
                  {/* </select> */}
              </Form.Select>
          </Form.Group>
          

          <Button variant='primary' onClick={registerHandler}>Create</Button>

      </Container>
    </div>
  )
} 

