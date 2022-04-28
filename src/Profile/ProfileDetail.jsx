import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Container, Button, Row, Col, } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router";
import './Profile.css';




export default function Profile (props)  {

    const [profileState, setProfile] = useState(null)
    // const [userId, setuserId] = useState(null)

    //Need to get line 21 to accept props.user.id
    

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
    

    console.log(props.user.id)



        return (
            <>
            {
            profileState &&

            <div>
                <Container fluid>
                    <Row>
                        <Col sm='auto'>
                        <div style={{
                            display: "flex",
                            justifyContent:'space-around',
                            margin:'40px 0px'}} >                            
                            <div>
                                <Image  style={{width: 150,height:150,objectFit:'cover', padding:0 }}  src={profileState.image} roundedCircle thumbnail />                            
                                {/* <Image  style={{width: 150,height:150,objectFit:'cover', padding:0 }}  src='https://media.harrypotterfanzone.com/harry-potter-chamber-of-secrets-portrait-3-1050x0-c-default.jpg' roundedCircle thumbnail /> */}
                            </div>
                            <div style={{textAlign: 'center', display:'flex', justifyContent:'center', flexDirection:'column' }}>
                                <h4>{profileState.firstName} {profileState.lastName}</h4>
                                <h5>{profileState.city} {profileState.province}</h5>
                            </div>
                        </div>

                            <div style={{ display: "block" ,justifyContent:'space-around', margin:'20px'}} >
                                <div>
                                    <h5  style={{ display:'inline-block', margin:'10px'}}>about me</h5>
                                    <Button  href={`profile/edit/${props.user.id}`}>Edit</Button>
                                    <div style={{border:'2px solid gray', padding:'10px', borderRadius:'5px'}}>
                                        <p>{profileState.about}</p>
                                    </div>
                                </div>

                                <div style={{textAlign:'center'}}>
                                    <h5 style={{  margin:'20px'}}>Hobbies</h5>
                                    <Row>
                                        <Col>
                                            <ul style={{  listStyleType: 'none'}}>
                                               {
                                                    profileState.hobby.map(function(hobby,index){
                                                        
                                                    return <Button key={index} variant="outline-primary" href={`hobbydetail/${hobby._id}`} className='hobby-btn'> {hobby.name} </Button> 
                                                    // <Button type="submit">Button</Button>{' '}
                                                    
                                                    // <li key={index} className='btn hobby-btn' style={{}}><a  href={`hobbydetail/${hobby._id}`}>{hobby.name}</a></li>
                                                    })
                                                }
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col sm>
                        <h1>My Events!</h1>
                        <ul style={{  listStyleType: 'none'}}>
                            {
                                profileState.events.map(function(event,index){
                                    return (

                                            <div key={index} style={{ display: "block", margin:'2vh auto',maxHeight:'20vh', maxWidth:'50vw',minWidth:'25vw'}} >
                                                <div style={{height:'100%', width:'100%', border:'1px solid gray', margin:'0 auto',border:'2px solid gray'}}>
                                                    <h1>{event.title}</h1>
                                                    <Image fluid style={{objectFit:'cover', padding:0 }}  src='https://imgs.search.brave.com/m1NcZ4LFZIcTN6zGwTI6fnMXVAAO2WjYrDDDyF2Bcb0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDIvZGFuaWVsLXJh/ZGNsaWZmZS13b3Vs/ZC10aGluay1hYm91/dC1oYXJyeS1wb3R0/ZXItcmV0dXJuLmpw/Zw'/>
                                                    <p>{event.description}</p>
                                                    <div>
                                                        <h2>{event.preciseLocation}</h2>
                                                        <iframe 
                                                            title={`${event.title}map`}
                                                            src= {`https://maps.google.com/maps?q=${event.preciseLocation}=&output=embed`}
                                                            width="600"
                                                            height="250"
                                                            frameBorder="0"
                                                            scrolling="no"
                                                            marginHeight="0"
                                                            marginWidth="0"
                                                            >
                                                        </iframe>
                                                    </div>
                                                    <Button>Edit Event</Button>
                                                </div>
                                            </div>

                                    )
                                })
                            }
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            }
            </>

        )
}