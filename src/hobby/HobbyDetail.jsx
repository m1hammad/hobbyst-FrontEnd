import React, {useState} from 'react' 
import EventCreateForm from '../event/EventCreateForm'
// import EventList from "../event/EventList" 
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
  console.log() 


    return (
      <> 
      {hobby&& 
        <div>
          <div className='hobbyTitle'> 
            <h1 className='title'>{hobby.name}</h1>  
            <img src={hobby.photo}></img> 
          </div>
            <h1 className='title'>Events</h1> 
            <p> map over all tagged to this particular hobby and display them as an index</p>   
            {/* <EventList></EventList> */}
            <EventCreateForm></EventCreateForm>
        </div>
      }
      </>
    )
  }


