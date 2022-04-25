import React, {useState} from 'react' 
import EventCreateForm from '../event/EventCreateForm'
import EventList from "../event/EventList" 
import {useParams} from "react-router-dom" 
import Axios from "axios"

export default function Hobby() {

  const params = useParams(); 
  console.log(params.id)  
  const [hobby,setHobby] = useState()

  Axios.get(`${params.id}`)
  .then(response => {
    console.log(response.data.hobby) 
    setHobby(response.data.hobby)
  }) 
  .catch(error => console.log(error)) 
  console.log({hobby}) 

 //check function if{hobby} , then :

  return (
      <div>
        <div className='hobbyTitle'> 
          <h1>{hobby}</h1>  
          {/* <img src={hobby.photo}></img>  */}
        </div>
          <h1>Events</h1> 
          <p> map over all tagged to this particular hobby and display them as an index</p>   
          {/* <EventList></EventList> */}
          <h2>Create New Event</h2>
          {/* <EventCreateForm></EventCreateForm> */}
      </div>
  )
}
