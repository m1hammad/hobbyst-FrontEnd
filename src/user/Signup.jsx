import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import Select from 'react-select'
// import {Multiselect} from 'multiselect-react-dropdown'
import Axios from 'axios' 
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import '../App.css';


export default function Signup(props) {

    const [user, setUser] = useState(null);
    const [hobbyState, setHobby] = useState([])

    const navigate = useNavigate();

    const changeHandler = (e) => {
        let temp = {...user}
        temp[e.target.name] = e.target.value
        temp.hobby = hobbyState
        console.log("this is temp", temp)
        setUser(temp)
    }
   
    const selectHobby = (e) => {
        let hobi = hobbyState
        if(hobi.indexOf(e.target.value) < 0){
        hobi.push(e.target.value)
        console.log(hobi)
        setHobby(hobi)
        }
    }

    const registerHandler = async() => {
        await props.register(user)
        console.log("hobby state", {hobbyState})
        console.log("user", user)
        console.log("email"+user.emailAddress+".")
        setTimeout(async() =>{ await Axios.post(`/hobbyUser/${user.emailAddress}`,hobbyState); navigate('/')}, 500)
        
    }

    console.log("This is my response",user)
    console.log("my hobbies outside",props.hobbies)

    // creating array and that array has the hobby buttons
    // pases the hobby id to the selecthobby function, and it adds it to the hobi list
    // and the setHobby statelist
    const hobbyArr = props.hobbies.map((hobby, index) => (
        <Button variant="outline-primary" name='hobby' type='button' className='hobby-btn' key={index} onClick={selectHobby} value={hobby._id} style={{fontSize:'75%'}} multiple >{hobby.name}</Button> 
        )
        )

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
            
            <Form.Group style={{display:'none'}}>
                <Form.Label>About</Form.Label>
                <Form.Control name="about" onChange={changeHandler} value=' '></Form.Control>
            </Form.Group>


            <Form.Group>
                <Form.Label>Hobbies:</Form.Label> <br/>
                    {hobbyArr}
            </Form.Group>
           

            <Button variant='primary' onClick={registerHandler}>Register</Button>

        </Container>
      </div>
    )
} 

