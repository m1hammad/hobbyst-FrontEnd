import Axios from 'axios';
import React, { useState, useEffect,Form} from 'react'
import {Container, Button, Row, Col, } from "react-bootstrap"
import { useNavigate } from "react-router";
import './Profile.css';
import {useParams} from "react-router-dom" 

import Select from 'react-select'


export default function ProfileEdit(props){

    // const [user, setUser] = useState(null);
    const [profileState, setProfile] = useState(null)

    // const [hobbyState, setHobby] = useState([])

    const navigate = useNavigate();
    const params = useParams(); 
    console.log(params.id,'params.id')  

    // console.log(props,'props')

    useEffect(()=>{
        // console.log('useEffected')
        console.log(props.user.id)
        if(props.user.id){   
            Axios.get(`/api/auth/user/${params.id}`)
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
   
    const editHandler = async() => {
        // props.register(user)
        // console.log("hobby state", {hobbyState})
        // console.log("user", user)
        await Axios.post(`/profile/edit/${props.user.id}`)
        navigate('/profile')
    }

    return(

        <div>
        <h1>Edit your profile</h1>
        <Button variant='primary' href={`/profile/delete/${props.user.id}`}>Delete profile</Button>

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
           

            <Button variant='primary' onClick={editHandler} >Save Changes</Button>

        </Container> */}
      </div>
    )
}