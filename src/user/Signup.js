import React, { Component } from 'react'
import {Container, Form, Button} from "react-bootstrap"
import useEffect  from 'react'
import Axios from 'axios'

export default class Signup extends Component {

    changeHandler = (e) => {
        let temp = {...this.state}
        temp[e.target.name] = e.target.value
        this.setState(temp)
    }

    registerHandler = () => {
        this.props.register(this.state)
    }

    componentDidMount(){
        Axios.get('/hobbyindex')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    
    

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Sign up</h1>
        <Container>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type='password' onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control name="city" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Province</Form.Label>
                <Form.Control name="province" onChange={this.changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>

            </Form.Group>

            <Button variant='primary' onClick={this.registerHandler}>Register</Button>

        </Container>
      </div>
    )
  }
}
