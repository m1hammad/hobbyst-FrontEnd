import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Container, Button, Row, Col, } from "react-bootstrap"
import {useParams} from "react-router-dom" 

import { useNavigate } from "react-router";
import './Profile.css';


export default function ProfileDelete(props){

    const params = useParams(); 
    console.log(params.id)  
    // console.log({URLSearchParams})

    const deleteHandler = async() => {
        // console.log("user", user)
        await Axios.delete(`/profile/delete/${params.id}`)
    }
    
    return(
        <div>
            <h1>Are you sure you want to delete your account?</h1>
            <h2> All your data will be lost.</h2>
            <Button variant='danger' onClick={deleteHandler}>Confirm Delete</Button>
        </div>
    )
}