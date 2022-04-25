import React from 'react'
import HobbyItem from "./HobbyItem";


export default function HobbyList(props) {

  
  console.log("Inside HobbyList",props.hobbies)

  return (   
    <>
    <h1 className='title'>HOBBIES</h1>
{props.hobbies.map((hobby, index) => ( <div className="hobbyList"> <HobbyItem hobby={hobby} key={index} /> </div>))}
    </> 
      )
    } 

  



