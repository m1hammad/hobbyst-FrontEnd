import React from 'react'; 
// import HobbyDetail from './HobbyDetail'

export default function HobbyItem(props) {  


  let link = `hobbydetail/${props.hobby._id}`

    return ( 
      
      <div className='HobbyItem'> 
      <a href={link}>
        {/* <h3 className='name'> {props.hobby.name} </h3> */}
       <img className='hobbyIndexImg' src={props.hobby.photo}/> 
      {/* <HobbyDetail hobby={props.hobby} key={props.hobby.id}> </HobbyDetail> */}
      </a> 
      </div>
    );
  }