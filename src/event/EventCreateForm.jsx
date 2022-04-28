import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import { FormGroup } from 'react-bootstrap';
import Axios from 'axios'
//import Hobby from "../models/Hobby" 
import jwt_decode from "jwt-decode"

export default function EventCreateForm(props){

    console.log(props, 'line 9 event create form')
    const navigate = useNavigate();
    // const [user, setUser] = useState(null);
    const [event, setEvent] = useState(null);
    const [mainUser, setMain] = useState([]);
    const [userId, setUserId] = useState(null)
    const [hobbyState, setHobby] = useState([])

    useEffect( () => {
    //    setUserId(props.user)
       let token = localStorage.getItem("token") 
       if(token !== null){
        let user = jwt_decode(token)
        if(user){
            setUserId(user.user.id)
        }
        else{
          localStorage.removeItem("token")
          setUserId(0)
        }
      }

       
       
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
        console.log(userId)
        props.eventy(event,userId)
        // props.eventy(event)
        setMain(mainUser)

        navigate('/')
    }
    // creating array and that array has the hobby buttons
    // pases the hobby id to the selecthobby function, and it adds it to the hobi list
    // and the setHobby statelist
    const hobbyArr = props.hobbies.map((hobby, index) => (
        <Button name='hobby' type='button' className='hobbyBtns' key={index} onClick={selectHobby} value={hobby._id} multiple >{hobby.name}</Button> 
        )
        )

        console.log(userId)

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
              <Form.Label>Photo Url:</Form.Label> 
              <Form.Control name="photo" type="string" onChange={changeHandler}></Form.Control>
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
              <Form.Label>Precise Location</Form.Label>
              <Form.Control name="preciseLocation" onChange={changeHandler}></Form.Control> 
           </Form.Group> 



          <Form.Group>
                <Form.Label>Hobbies:</Form.Label> <br/>
                {/* <select class="select" multiple> */}
                {/* <Form.Select options={aquaticCreatures} className="select" name="hobby[]" onChange={changeHandler} multiple="" data-live-search="true"> */}
                    {hobbyArr}
                    {/* <Button type='button' name='hobby[]' onClick={changeHandler} value="hi" >Hi</Button> */}
                    {/* </select> */}
                {/* </Form.Select> */}
            </Form.Group>

                    <br></br>
              
        <Button variant='primary' className="createBtn" onClick={createEventHandler}> 
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        Create</Button>

      </Container>
      </div>
   </>
  )
} 