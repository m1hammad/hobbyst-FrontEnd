import React, {useEffect, useState} from 'react' 
// import EventCreateForm from '../event/EventCreateForm'
// import EventList from "../event/EventList"  
import {Button} from "react-bootstrap"
import {useParams} from "react-router-dom" 
import Axios from "axios" 
import EventItem from "../event/EventItem"

export default function Hobby(props) {  
 
  const params = useParams(); 
  console.log(params.id)  
  const [hobby,setHobby] = useState() 

  useEffect( () => { 
    Axios.get(`/hobbydetail/${params.id}`)
    .then(response => {
      console.log(response.data, "unique")  
      // hobby = params.id
      setHobby(response.data)
    }) 
    .catch(error => console.log(error)) 
    console.log() 
  }, 
  []
  )
  
  if (hobby){ 
    console.log(hobby.events)
  }

    return (
      <>
      {hobby&& 
        <div>
          <div className='hobbyTitleCard'> 
            <h1 className='title'>{hobby.name}</h1>  
            <img className="hobbyDetailImg" src={hobby.photo}></img> 
          </div>
            <h1 className="eventsHeading">Events</h1>  
          
          <div className="eventsInHobbyDetail"> 
               {hobby.events.map((event, index) => ( <a href={`/eventdetail/${event._id}`}> <div className="eventItems" key={index}> <EventItem event={event} key={index}/> </div> </a> ))}
          </div>

          <div> 
          <Button variant="outline-light" className='createNewBtn' href={`/eventcreateform`}>Create New</Button>
            {/* <button className="createNewBtn"> <a href="/eventcreateform"> 
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          Create New</a> </button> */}
          </div>

        </div>
       }
      </>
    )
  }


