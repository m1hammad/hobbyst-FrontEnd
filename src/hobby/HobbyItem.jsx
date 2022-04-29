import React from 'react'; 
// import HobbyDetail from './HobbyDetail'

export default function HobbyItem(props) {  


  let link = `hobbydetail/${props.hobby._id}`

    return ( 
    <div> 
      <div className='HobbyItem'> 
      <a href={link}>
       <img className='hobbyIndexImg' src={props.hobby.photo}/>  
      </a> 
      </div> 
      <div> 
        <h4 className="hobbyIndexName">{props.hobby.name}</h4>
      </div>
    </div>
    );
  }