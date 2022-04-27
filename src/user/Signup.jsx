import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import Select from 'react-select'
// import {Multiselect} from 'multiselect-react-dropdown'
import Axios from 'axios' 
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

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
        hobi.push(e.target.value)
        console.log(hobi)
        setHobby(hobi)
    }

    const registerHandler = () => {
        props.register(user)
        navigate('/')
    }

    console.log("This is my response",user)
    console.log("my hobbies outside",props.hobbies)

    // creating array and that array has the hobby buttons
    // pases the hobby id to the selecthobby function, and it adds it to the hobi list
    // and the setHobby statelist
    const hobbyArr = props.hobbies.map((hobby, index) => (
        <Button name='hobby' type='button'  key={index} onClick={selectHobby} value={hobby._id} multiple >{hobby.name}</Button> 
        )
        )
    console.log('yo', hobbyArr)

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
                <Form.Label>Hobbies:</Form.Label> <br/>
                {/* <select class="select" multiple> */}
                {/* <Form.Select options={aquaticCreatures} className="select" name="hobby[]" onChange={changeHandler} multiple="" data-live-search="true"> */}
                    {hobbyArr}
                    {/* <Button type='button' name='hobby[]' onClick={changeHandler} value="hi" >Hi</Button> */}
                    {/* </select> */}
                {/* </Form.Select> */}

            </Form.Group>
           

            <Button variant='primary' onClick={registerHandler}>Register</Button>

        </Container>
      </div>
    )
} 

// const Dropdown = ({
//     options
//   }) => {
//     const [selectedOption, setSelectedOption] = useState(options[0].value);
//     return (
//         <select
//           value={selectedOption}
//           onChange={e => setSelectedOption(e.target.value)}>
//           {options.map(o => (
//             <option key={o.value} value={o.value}>{o.label}</option>
//           ))}
//         </select>
//     );
//   };
