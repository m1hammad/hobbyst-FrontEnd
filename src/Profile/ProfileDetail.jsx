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
            Axios.get(`/profile?id=${props.user.id}`)
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
                        <Col sm='auto' style={{minWidth:'40vw'}}>
                            <div style={{
                                display: "flex",
                                justifyContent:'space-around',
                                margin:'40px 0px'}} >                            
                                <div>
                                    <Image  style={{width: '18vw', minWidth:'90px',height:'18vw',minHeight:'90px',objectFit:'cover', padding:0 }}  src={profileState.image} roundedCircle thumbnail />                            
                                    {/* <Image  style={{width: 150,height:150,objectFit:'cover', padding:0 }}  src='https://media.harrypotterfanzone.com/harry-potter-chamber-of-secrets-portrait-3-1050x0-c-default.jpg' roundedCircle thumbnail /> */}
                                </div>
                                <div style={{textAlign: 'center', display:'flex', justifyContent:'center', flexDirection:'column' }}>
                                    <h4>{profileState.firstName} {profileState.lastName}</h4>
                                    <h5>{profileState.city} {profileState.province}</h5>
                                    <Button variant="outline-light" className='hobby-btn' href={`profile/edit/${props.user.id}`}>Edit Profile </Button>
                                </div>
                            </div>

                                <div style={{ display: "block" ,justifyContent:'space-around', margin:'20px'}} >
                                    <div>
                                        <h5  style={{ display:'inline-block', margin:'10px'}}>about me</h5>
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
                                                            
                                                        return <Button key={index} variant="outline-light" href={`hobbydetail/${hobby._id}`} className='hobby-btn'> {hobby.name} </Button> 
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

                            <Col sm style={{justifyContent:'center',textAlign:'center'}}>
                            <h1 class="title">My Events</h1>
                            <ul style={{  listStyleType: 'none', margin:'0 auto',padding:'0'}}>
                                {
                                    profileState.events.map(function(event,index){
                                        return (

                                            <Container fluid style={{textAlign:'center', color:"#333", paddingBottom:"1em", margin:'2vh auto',padding:'0', backgroundColor:'white',borderRadius:'10px',
                                                boxShadow: '4px 4px 10px gray'}} key={index}>
                                                <h3>{event.title}</h3>
                                                <Row style={{height:'100%', width:"max-content",maxWidth:'90vw', margin:'0 auto',padding:'0em', justifyContent:'space-between'}}>
                                                    <Col sm>
                                                        <Image fluid style={{objectFit:'cover', padding:0, width:'300px', borderRadius:'10px'}}  src={`${event.photo}`}/>
                                                        <p>{event.description}</p>
                                                    </Col>
                                                    <Col sm>
                                                        <div style={{display:'flex',justifyContent:'center' }}>
                                                            <iframe 
                                                                title={`${event.title}map`}
                                                                src= {`https://maps.google.com/maps?q=${event.preciseLocation}=&output=embed`}
                                                                width="275"
                                                                height="200"
                                                                frameBorder="0"
                                                                scrolling="no"
                                                                marginHeight="0"
                                                                marginWidth="0"
                                                                >
                                                            </iframe>
                                                        </div>
                                                    </Col>
                                                    {/* <Button>Edit Event</Button> */}
                                                </Row>
                                            </Container>
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