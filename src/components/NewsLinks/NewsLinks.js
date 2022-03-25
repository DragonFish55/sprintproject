
import './NewsLinks.css';
import {useEffect, useState} from 'react'
import $ from 'jquery'
import coockiecheck from '../../cookiecheck';

//returns main page component of the frontend app
function NewsLinks(props) {


   const callCategory = (event) => {
      let namein = event.target.textContent
      props.categoryData(namein)
   }

  return (
    <div className="newslinks">
      <div className='newslink'><button>Home</button></div>
      <div className='newslink'><button onClick={callCategory}>General</button></div>
      <div className='newslink'><button onClick={callCategory}>Business</button></div>
      <div className='newslink'><button onClick={callCategory}>Entertainment</button></div>
      <div className='newslink'><button onClick={callCategory}>Health</button></div>
      <div className='newslink'><button onClick={callCategory}>Science</button></div>
      <div className='newslink'><button onClick={callCategory}>Sports</button></div>
      <div className='newslink'><button onClick={callCategory}>Technology</button></div>
    </div>
  )
  

}

export default NewsLinks;