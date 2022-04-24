import React, { Component } from 'react' 
//import Hobby from "../models/Hobby"

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
      <h1>Sign up</h1>
      <Container>
          <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type='password' onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control name="city" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Province</Form.Label>
              <Form.Control name="province" onChange={changeHandler}></Form.Control>
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
          

          <Button variant='primary' onClick={registerHandler}>Register</Button>

      </Container>
    </div>
  )
} 
}
