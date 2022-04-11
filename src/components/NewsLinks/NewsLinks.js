
import './NewsLinks.css';
import {useEffect, useState} from 'react'
import $ from 'jquery'
import coockiecheck from '../../cookiecheck';

//returns main page component of the frontend app
function NewsLinks(props) {

  useEffect(() => {
    let sett_cat = document.getElementById("homelink")
    sett_cat = sett_cat.children[0]
    sett_cat.style.backgroundColor = "black"
    sett_cat.style.color = "white"
  }, [])

   const callCategory = (event) => {
      let namein = {"name":event.target.textContent}
      let target = event.target
      let cat_child = null
      let i = 0

      let categories = document.getElementsByClassName("newslink")
      for (i = 0; i < categories.length; i++){
        cat_child = categories[i]
        cat_child = cat_child.children[0]
        cat_child.style.backgroundColor = "gray"
        cat_child.style.color = "black"
      }
      target.style.backgroundColor = "black"
      target.style.color = "white"
      props.categoryData(namein)
   }

  return (
    <div className="newslinks">
      <div className='newslink' id = "homelink"><button onClick={callCategory}>Home</button></div>
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