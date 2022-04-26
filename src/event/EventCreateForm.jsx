import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import { FormGroup } from 'react-bootstrap'
//import Hobby from "../models/Hobby"

export default function EventCreateForm(props){

    console.log(props, 'line 9 event create form')
    const navigate = useNavigate();
    // const [user, setUser] = useState(null);
    const [event, setEvent] = useState(null);
    const [mainUser, setMain] = useState([]);
    const [userId, setuserId] = useState(null)

    useEffect( () => {
       setuserId(props)
       
    }, [])
    
    console.log(userId, 'this is console loggins test')
    
    const changeHandler = (e) => {
        let temp = {...event}
        temp[e.target.name] = e.target.value
        temp.user = mainUser
        console.log("this is temp", temp)
        setEvent(temp)
    }
    console.log("this evetn is",event)
 
    const originalUser = (e) =>{
        let creator = mainUser
        creator.push(e.target.value)
        setMain(creator)
        console.log("the of user",creator)

    }

    const createEventHandler = () => {
        props.eventy(event)
        setMain(mainUser)
        navigate('/')
    }
// console.log("the props.user is:",props.user.id)


//   console.log(this.state.newEvent)

  return (
    <>
  
    <div>
      <h1>Create Event</h1>
      <Container>
          <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control name="photo" onChange={changeHandler}></Form.Control>
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
              
              
        <Button name="user" onClick={originalUser}></Button>
        <Button variant='primary' onClick={createEventHandler}>Create</Button>

      </Container>
      </div>
   </>
  )
} 