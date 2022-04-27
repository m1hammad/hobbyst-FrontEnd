import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import { FormGroup } from 'react-bootstrap';
import Axios from 'axios'
//import Hobby from "../models/Hobby"

export default function EventCreateForm(props){

    console.log(props, 'line 9 event create form')
    const navigate = useNavigate();
    // const [user, setUser] = useState(null);
    const [event, setEvent] = useState(null);
    const [mainUser, setMain] = useState([]);
    const [userId, setuserId] = useState(null)
    const [hobbyState, setHobby] = useState([])

    useEffect( () => {
       setuserId(props)
       
    }, [])

    console.log("props:", props)
       

    const changeHandler = (e) => {
        let temp = {...event}
        temp[e.target.name] = e.target.value
        temp.user = mainUser
        temp.hobby = hobbyState
        console.log("this is temp", temp)
        setEvent(temp)
    }
    // this saves the clicked hobbies
    const selectHobby = (e) => {
        let hobi = hobbyState
        hobi.push(e.target.value)
        console.log(hobi)
        setHobby(hobi)
    }

 
    const originalUser = (e) =>{
        let creator = mainUser
        creator.push(e.target.value)
        setMain(creator)
        console.log("the of user",creator)
    }

    const createEventHandler = () => {
        props.eventy(event,props.user.id)
        props.eventy(event)
        setMain(mainUser)

        navigate('/')
    }
    // creating array and that array has the hobby buttons
    // pases the hobby id to the selecthobby function, and it adds it to the hobi list
    // and the setHobby statelist
    const hobbyArr = props.hobbies.map((hobby, index) => (
        <Button name='hobby' type='button'  key={index} onClick={selectHobby} value={hobby._id} multiple >{hobby.name}</Button> 
        )
        )

  return (
    <>
  
    <div>
      <h1 className='title'>Create Event</h1>
      <Container>
          <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control name="photo" type="string" ></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>Date and Time</Form.Label>
              <Form.Control name="dateAndTime" type='datetime-local' onChange={changeHandler}></Form.Control>
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



          <Form.Group>
                <Form.Label>Hobbies:</Form.Label> <br/>
                {/* <select class="select" multiple> */}
                {/* <Form.Select options={aquaticCreatures} className="select" name="hobby[]" onChange={changeHandler} multiple="" data-live-search="true"> */}
                    {hobbyArr}
                    {/* <Button type='button' name='hobby[]' onClick={changeHandler} value="hi" >Hi</Button> */}
                    {/* </select> */}
                {/* </Form.Select> */}
            </Form.Group>

              
        <Button variant='primary' onClick={createEventHandler}>Create</Button>

      </Container>
      </div>
   </>
  )
} 