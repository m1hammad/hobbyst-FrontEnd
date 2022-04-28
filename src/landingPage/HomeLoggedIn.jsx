import React, { useEffect, useState } from 'react'
import './Home.css';
import Axios from 'axios'

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
      <h1>Welcome Back, <span id='username'>{props.user.name}</span> </h1>  
      <h1 className="appLogo"> HOBBYST </h1>
      {/* {hobbies.map()} */}
    </div>
  </>
  )
}
