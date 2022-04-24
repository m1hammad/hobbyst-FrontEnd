import React, { useState, useEffect } from 'react'
import {Container, Form, Button,} from "react-bootstrap"
import { useNavigate } from "react-router";
import Select from 'react-select'
// import {Multiselect} from 'multiselect-react-dropdown'
import Axios from 'axios' 

export default function Signup(props) {

    const [user, setUser] = useState(null);
    const [hobby, setHobby] = useState([]);

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

    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark'},
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
      ];
      
   

    useEffect(() => {
            Axios.get('/hobbyindex')
            .then(response => {
                const hobbies = response.data.hobbiesList
                // console.log("myhobbies",hobbies)

                setHobby(hobbies)

            })
            .catch(error => console.log(error))
    }, [])
    console.log("This is my response",user)
    console.log("my hobbies outside",hobby)

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
                <Form.Label>Hobbies:</Form.Label> 
                {/* <select class="select" multiple> */}
                <Form.Select options={aquaticCreatures} className="select" name="hobby[]" onChange={changeHandler} multiple="" data-live-search="true">
                    {hobby.map((hobby, index) => (
                        <Form.Control key={index} >{hobby.name}</Form.Control>
                    ))} 
                    {/* </select> */}
                </Form.Select>

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
