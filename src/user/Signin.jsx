import React, { useState } from 'react'
import {Container, Form, Button} from "react-bootstrap"
import { useNavigate } from "react-router";

export default function Signin(props) {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    let temp = {...user}
    temp[e.target.name] = e.target.value
    setUser(temp)
  }

  const loginHandler = () => {
    props.login(user)
    navigate('/')
  }

  
  console.log(user)
  return (
    <div>
      <h1 className="title">Sign in</h1>
      <Container>
          <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type='password' onChange={changeHandler}></Form.Control>
          </Form.Group>

          <Button className="signInBtn" variant='primary' onClick={loginHandler}>Sign In</Button>

      </Container>
    </div>
  )
}
