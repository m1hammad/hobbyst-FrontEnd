import React, { useState, useEffect } from 'react'
import {Container, Form, Button} from "react-bootstrap"
import { useNavigate } from "react-router";
import Axios from 'axios'

export default function Signup(props) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        let temp = {...user}
        temp[e.target.name] = e.target.value
        setUser(temp)
    }

    const registerHandler = () => {
        props.register(user)
        navigate('/')
    }

    useEffect(() => {
            Axios.get('/hobbyindex')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])

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

            </Form.Group>

            <Button variant='primary' onClick={registerHandler}>Register</Button>

        </Container>
      </div>
    )
}
