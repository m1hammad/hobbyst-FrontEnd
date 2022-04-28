import React from 'react'

export default function EventItem(props) {
  return (
    <div className='eventItem'>
           <h3 className='eventTitle'>{props.event.title} </h3> 
           <h4>{props.event.dateAndTime}</h4> 
            <h4> {props.event.generalLocation} </h4>
            <h4>{props.event.description} </h4>
    </div>
  )
}

