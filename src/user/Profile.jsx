import Axios from 'axios';
import React, { useState, useEffect} from 'react'
import {Container, Form, Button, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router";




export default function Profile  (props)  {

    const [profileState, setProfile] = useState(null)
    const [userId, setuserId] = useState(null)


    // console.log(props.user.id)
    // useEffect( () => {
    //     // await Axios.post(`/profile?id=${props.user.id}`)
    //    setProfile(props.user.id)
    //    console.log(userId, 'this is console loggins test')
    // }, [])

    // useEffect( async() => {
    //    await setuserId(props.user.id)
    //    console.log(userId, 'this is console loggins test')
    // }, [])

    useEffect(()=>{
        console.log('useEffected')
        // if(userId!=1 && != null){
            // Axios.get(`profile/?id=${props.user.id}`)
            Axios.get(`profile/?id=6265d63cb7509d94d352360f`)
            .then(response=>{
                setProfile(response.data)
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        // }
    },[])

    // console.log(profileState)
    

    let address='1050+bloor+ave,toronto,ontario'


    // console.log(props.user)





    // .then(
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
                            {/* {props.user.name} */}
                            
                            <div>
                                <Image  style={{width: 150,height:150,objectFit:'cover', padding:0 }}  src={profileState.image} roundedCircle thumbnail />                            
                                {/* <Image  style={{width: 150,height:150,objectFit:'cover', padding:0 }}  src='https://media.harrypotterfanzone.com/harry-potter-chamber-of-secrets-portrait-3-1050x0-c-default.jpg' roundedCircle thumbnail /> */}
                            </div>
                            <div style={{textAlign: 'center', display:'flex', justifyContent:'center', flexDirection:'column' }}>
                                <h4>{profileState.firstName} {profileState.lastName}</h4>
                                <h5>{profileState.city} {profileState.province}</h5>
                                <h5>hogwarts school of witchcraft and wizardry</h5>
                            </div>
                        </div>

                            <div style={{ display: "block" ,justifyContent:'space-around', margin:'20px'}} >
                                <div>
                                    <h5  style={{  margin:'10px'}}>about me</h5>
                                    <div style={{border:'2px solid black', padding:'10px'}}>
                                        <p>hello i like to do things and have fun!</p>
                                    </div>
                                </div>

                                <div style={{textAlign:'center'}}>
                                    <h5 style={{  margin:'20px'}}>Hobbies</h5>
                                    <Row>
                                        <Col>
                                            <ul style={{display:''}}>
                                                <li>thing</li>
                                                <li>other thing</li>
                                                <li>another one</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col md>
                        <h1>Events!</h1>
                        <div style={{ display: "block", margin:'2vh auto',maxHeight:'20vh', maxWidth:'50vw',minWidth:'25vw'}} >
                            <div style={{height:'100%', width:'100%', border:'1px solid gray', margin:'0 auto',border:'2px solid gray'}}>
                            Kill snake man
                                <Image fluid style={{objectFit:'cover', padding:0 }}  src='https://imgs.search.brave.com/m1NcZ4LFZIcTN6zGwTI6fnMXVAAO2WjYrDDDyF2Bcb0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDIvZGFuaWVsLXJh/ZGNsaWZmZS13b3Vs/ZC10aGluay1hYm91/dC1oYXJyeS1wb3R0/ZXItcmV0dXJuLmpw/Zw'/>
                                <div>
                                    Location here:~~~~~~ this is a place~~~~~~
                                    <iframe 
                                        // src = {stringy}
                                        src= {`https://maps.google.com/maps?q=${address}=&output=embed`}
                                        width="600"
                                        height="250"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        >
                                    </iframe>
                                </div>
                                <Button>attend the thing</Button>
                            </div>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            }
            </>

        )
    // )
    // .catch(error=>{
    //     console.log(error)
    // })

}