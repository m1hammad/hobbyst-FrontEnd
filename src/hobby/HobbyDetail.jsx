import React, {useEffect, useState} from 'react' 
// import EventCreateForm from '../event/EventCreateForm'
// import EventList from "../event/EventList" 
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
            <h1>Events</h1>  
            <ul>
               {hobby.events.map((event, index) => ( <a href={`/eventdetail/${event._id}`}> <div className="eventItems" key={index}> <EventItem event={event} key={index}/> </div> </a> ))}
              </ul>
            {/* <EventList></EventList> */}
            <button> <a href="/eventcreateform"> Create New Event </a> </button>
            {/* <EventCreateForm></EventCreateForm> */}
        </div>
       }
      </>
    )
  }


