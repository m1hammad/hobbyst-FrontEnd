import React from 'react'; 
// import HobbyDetail from './HobbyDetail'

export default function HobbyItem(props) {  

  let link = `hobbydetail/${props.hobby._id}`

    return ( 
      
      <div className='HobbyItem'> 
      <a href={link}>
        <h3> 
         {props.hobby.name}  
        </h3>
      <br></br>
      <img src={props.hobby.photo}></img>  
      </a>
      {/* <HobbyDetail hobby={props.hobby} key={props.hobby.id}> </HobbyDetail> */}
      </div>
    );
  }