import React, { useEffect, useState } from 'react'
import './Home.css';
import Axios from 'axios' 
import HobbyItem from "../hobby/HobbyItem";

export default function HomeLoggedIn(props) {
  const [hobbies, setHobbies] = useState([])

  useEffect(() =>  {
    console.log("props",props.user)
        Axios.get(`/profile?id=${props.user.id}`)
        .then(response => {
          console.log("resp:",response)
          console.log("response.data", response.data.hobby)
          let userhobbies = response.data.hobby.slice()
          setHobbies(userhobbies)
        })
        
          .catch(error =>{
            console.log(error)
          })
  },[])
  console.log("hobbies",hobbies)
  return ( 
    <>
    <div>
      <h1 className="title">Hey, {props.user.name}!</h1>    

      <div className="isLoggedInHobbies"> 
      <h1>Hobbies:</h1>
      {hobbies.map((hobby, index) => ( <div className="hobbyList"> <HobbyItem hobby={hobby} key={index} /> </div>))}
      </div>
    </div>
  </>
  )
}
