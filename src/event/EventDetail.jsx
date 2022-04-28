import Axios from 'axios';
import React, {useEffect, useState} from 'react'  
import {useParams} from "react-router-dom"  
import {Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

export default function EventDetail(props) {  

    const params = useParams(); 
    console.log(params)  
    const [event,setEvent] = useState() 

    useEffect( () => { 
        Axios.get(`/eventdetail/${params.eventid}`)
        .then(response => {
          console.log(response.data, "unique")  
          // hobby = params.id
          setEvent(response.data)
        }) 
        .catch(error => console.log(error)) 
        console.log() 
      }, 
      []
      ) 

      if (event){ 
        console.log(event.title)
      }

  return (
      <> 
      {event&& 
      <div className='eventDetailContainer'> 
         <Col sm>
            <Image fluid style={{objectFit:'cover', padding:0, width:'300px', borderRadius:'10px'}}  src={`${event.photo}`}/>
          </Col> 
                <h1 className="title"> {event.title} </h1> 
                <br></br>
                <h3 style={{textAlign:'center'}}> {event.description} </h3> 
                <br></br>
            <div> 
                <h3> Date and Time: {event.dateAndTime} </h3> 
                 <h3> Maximum Participants: {event.maxParticipants} </h3> 
                <h3> General Location: {event.generalLocation} </h3> 
                <h3> Precise Location: {event.preciseLocation} </h3>
            </div> 


      </div>
      }
      </>


  ) 
}








//     <div>
//         <Container fluid style={{textAlign:'center', margin:'2vh auto',padding:'0', backgroundColor:'white',borderRadius:'10px',
//                                                 boxShadow: '4px 4px 10px gray'}} key={index} >
//                                                 {/* <h3>{event.title}</h3> */}
//                                                 <Row style={{height:'100%', width:"max-content",maxWidth:'90vw', margin:'0 auto',padding:'0em', justifyContent:'space-between'}}>
//                                                     <Col sm>
//                                                         <Image fluid style={{objectFit:'cover', padding:0, width:'300px', borderRadius:'10px'}}  src={`${event.photo}`}/>
//                                                         <p>{event.description}</p>
//                                                     </Col>
//                                                     <Col sm>
//                                                         <div style={{display:'flex',justifyContent:'center' }}>
//                                                             <iframe 
//                                                                 title={`${event.title}map`}
//                                                                 src= {`https://maps.google.com/maps?q=${event.preciseLocation}=&output=embed`}
//                                                                 width="275"
//                                                                 height="200"
//                                                                 frameBorder="0"
//                                                                 scrolling="no"
//                                                                 marginHeight="0"
//                                                                 marginWidth="0"
//                                                                 >
//                                                             </iframe>
//                                                         </div>

//                                                     </Col>
//                                                     {/* <Button>Edit Event</Button> */}
//                                                 </Row>
//                                             </Container>


//     </div>
//   )
