import React from 'react'
import HobbyItem from "./HobbyItem";


export default function HobbyList(props) {

  let allHobbies;
  console.log("Inside HobbyList",props.hobbies)

  return (   
    allHobbies = props.hobbies.map((hobby, index) => ( 
          <div> 
        <HobbyItem hobby={hobby} key={index}> </HobbyItem> 
        {allHobbies}
          </div> 
      )
    )
    )
}



