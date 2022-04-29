import Axios from 'axios';
import React, {useEffect, useState} from 'react'  
import {useParams} from "react-router-dom"  
import {Col, Row, Button, Form} from "react-bootstrap"
import Image from 'react-bootstrap/Image'

export default function EventDetail(props) {  

    const params = useParams(); 
    console.log("params:",params.eventid, props.user.id)  
    const [event,setEvent] = useState() 

    useEffect( () => { 
        Axios.get(`/eventdetail/${params.eventid}`)
        .then(response => {
          console.log(response.data, "unique")  
          // hobby = params.id
          setEvent(response.data.event)
        }) 
        .catch(error => console.log(error)) 
         
      }, 
      []
      ) 

  console.log(event) 
      
      return (
        <> 
      {event&& 
<div>   


        <div> 
          <h1 className="title"> {event.title} </h1> 
          <br></br>
          <br></br>

        </div>

  <div className='DetailsContainer'> 
   
      <Row className='eventDetails'> 
          <Col sm className="eventDetailsCube"> 
                  <h2> <span className="DetailName"> Description:</span> </h2>  
                  <h2> {event.description} </h2> 
          </Col>
         <Col sm className="eventDetailsCube">
            <Image fluid style={{objectFit:'cover', padding:0, width:'350px', height:"275px", borderRadius:'10px', display:'flex'}}  src={`${event.photo}`}/>
          </Col>  
       </Row> 

        <Row className='eventDetails'> 
          <Col sm className="eventDetailsCube">
                <div style={{display:'flex' }}>
                    <iframe 
                      title={`${event.title}map`}
                      src= {`https://maps.google.com/maps?q=${event.preciseLocation}=&output=embed`}
                      width="350"
                      height="275"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      >
                    </iframe>
                </div>
           </Col>

          <Col sm className="eventDetailsCube"> 
              <div> 
                  <h3 className="DetailName"> Date and Time:</h3>  <span>{event.dateAndTime} </span>  
                  <h3 className="DetailName"> Maximum Participants:</h3>  <span> {event.maxParticipants} </span>
                  <h3 className="DetailName"> General Location: </h3> <span>{event.generalLocation} </span>
                  <h3 className="DetailName"> Precise Location: </h3> <span> {event.preciseLocation}</span> 
              </div> 
          </Col>
        </Row>
      <br></br>

      </div>         
</div>

      }
      </>


  ) 
}
        
        
        

