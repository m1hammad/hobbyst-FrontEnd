import React from 'react'
import './Home.css';

export default function HomeLoggedIn(props) {


  return ( 
    <div>
      <h1>Welcome Back, <span id='username'>{props.user.name}</span> </h1>  
      <h1 className="appLogo"> HOBBYST </h1>
    </div>
  )
}
