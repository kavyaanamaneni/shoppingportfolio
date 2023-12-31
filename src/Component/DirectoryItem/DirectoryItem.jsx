import React from 'react'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const{imageUrl,title,route}=category;
    const navigate=useNavigate();
    const navigateHandler=()=>navigate(route)
  return (
    
       <div className='directory-item-container' onClick={navigateHandler}>
        <div className='background-image' style={{
          backgroundImage:`url(${imageUrl})`
        }}/>
        <div className='body'>
           <h2>{title}</h2>
           <p>shop now</p>
        </div>
      </div>
       
  )
}

export default DirectoryItem;
