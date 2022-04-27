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
    
    Axios.get(`${params.id}`)
    .then(response => {
      console.log(response.data.hobby) 
      setHobby(response.data.hobby)
    }) 
    .catch(error => console.log(error)) 
    console.log() 
  }, 
  []
  )
  

    return (
      <> 
      {hobby&& 
        <div>
          <div className='hobbyTitle'> 
            <h1 className='title'>{hobby.name}</h1>  
            {/* <img src={hobby.photo}></img>  */}
          </div>
            <h1 className='title'>Events</h1>  
            
            {/* <p> {hobby.events} </p>   */}
            {hobby.events.map((hobby, event, index) => ( <div className="eventItems"> <EventItem event={event} hobby={hobby} key={index} /> </div>))}  
            {/* <EventList></EventList> */}
            <button> <a href="/eventcreateform"> Create New Event </a> </button>
            {/* <EventCreateForm></EventCreateForm> */}
        </div>
      }
      </>
    )
  }


