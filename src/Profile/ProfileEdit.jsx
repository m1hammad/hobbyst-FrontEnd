import Axios from 'axios';
import React, { useState, useEffect,Form} from 'react'
import {Container, Button, Row, Col, } from "react-bootstrap"
import { useNavigate } from "react-router";
import './Profile.css';

import Select from 'react-select'


export default function ProfileEdit(props){

    // const [user, setUser] = useState(null);
    const [profileState, setProfile] = useState(null)

    // const [hobbyState, setHobby] = useState([])

    const navigate = useNavigate();

    console.log(props)

    useEffect(()=>{
        // console.log('useEffected')
        console.log(props.user.id)
        if(props.user.id){   
            Axios.get(`/api/auth/user/${props.user.id}`)
            .then(response=>{
                setProfile(response.data)
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },[props.user.id])

    console.log(props.user.id)

    // const changeHandler = (e) => {
    //     let temp = {...user}
    //     temp[e.target.name] = e.target.value
    //     temp.hobby = hobbyState
    //     console.log("this is temp", temp)
    //     setUser(temp)
    // }
   
    // const registerHandler = async() => {
    //     props.register(user)
    //     console.log("hobby state", {hobbyState})
    //     console.log("user", user)
    //     await Axios.post(`/hobbyUser/${user.emailAddress}`,hobbyState)
    //     navigate('/')
    // }

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
           

            <Button variant='primary' onClick={registerHandler} >Save Changes</Button>

        </Container> */}
      </div>
    )
}