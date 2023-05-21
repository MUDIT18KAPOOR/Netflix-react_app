import React from "react";

const SeriesComponents = (props)=>{
  return(
    <div className='cards'>
    <div className='card'>
    <img src='https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLn6xY1bOI5mPeAZpU6v7wafhinJ0mnG3D1TKZM_Zv79mQIdxW9P41ZGyMcyxN4xI5vhRMyfF_6F4tsKCKxsGrXirLt-h32Ar1B.jpg?r=077' alt='myPic' className='cards_img'/>
    <div className='card_info'>
      <span className='card_category'>A Netflix Orignals</span>
      <h3 className='card_title'> Dark </h3>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <button>Watch Now</button>
      </a>
    </div>
    </div>
  </div>
  )
    
}

export default SeriesComponents;
