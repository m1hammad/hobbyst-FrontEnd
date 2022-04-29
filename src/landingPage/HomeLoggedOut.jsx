import React from 'react'
import './Home.css';

export default function HomeLoggedOut(props) { 

  console.log()
  return (
    <div>
        <div id='loggedout'></div> 
        <h1 className="appLogo"> HOBBYST </h1> 
        <h4 className="byline"> Connect to your favorite hobbies and meet others who love them too</h4>
    </div>
  )
}
