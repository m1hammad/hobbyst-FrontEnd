import Axios from 'axios';
import React, { useState, useEffect,Form} from 'react'
import {Container, Button, Row, Col, } from "react-bootstrap"
import { useNavigate } from "react-router";
import './Profile.css';

import Select from 'react-select'


export default function ProfileEdit(props){

    const [user, setUser] = useState(null);
    const [profileState, setProfile] = useState(null)

    const [hobbyState, setHobby] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        // console.log('useEffected')
        console.log(props.user.id)
        if(props.user.id){   
            Axios.get(`profile/?id=${props.user.id}`)
            .then(response=>{
                setProfile(response.data)
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },[props.user.id])

    const changeHandler = (e) => {
        let temp = {...user}
        temp[e.target.name] = e.target.value
        temp.hobby = hobbyState
        console.log("this is temp", temp)
        setUser(temp)
    }
   

    return(

        <div>
        <h1>Edit your profile</h1>
        {/* <Container>
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
                <Form.Label>City</Form.Label>
                <Form.Control name="city" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Province</Form.Label>
                <Form.Control name="province" onChange={changeHandler}></Form.Control>
            </Form.Group>
                
            
            <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control name="about" onChange={changeHandler}></Form.Control>
            </Form.Group>

            {/* <Form.Group>
                <Form.Label>Hobbies:</Form.Label> <br/>
                    {hobbyArr}
            </Form.Group> 
           

            <Button variant='primary' >Register</Button>

        </Container> */}
      </div>
    )
}