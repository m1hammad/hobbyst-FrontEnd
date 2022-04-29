import React from 'react'; 
import {Link} from "react-router-dom"
// import HobbyDetail from './HobbyDetail'

export default function HobbyItem(props) {  


  let link = `/hobby/detail/${props.hobby._id}`

    return ( 
      
      <div className='HobbyItem'> 
      <Link to={link}>
        {/* <h3 className='name'> {props.hobby.name} </h3> */}
       <img className='hobbyIndexImg' src={props.hobby.photo}/> 
      {/* <HobbyDetail hobby={props.hobby} key={props.hobby.id}> </HobbyDetail> */}
      </Link> 
      </div>
    );
  }