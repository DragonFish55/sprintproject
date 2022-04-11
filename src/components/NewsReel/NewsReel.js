import './NewsReel.css';
import {Link} from 'react-router-dom'
import {React, useEffect, useState} from 'react';
import $, { data } from 'jquery';
import News from '../News/News';

//returns the header component to be put in main page
function NewsReel(props) {
  
  let data_in = props.data
  const [pages, setPages] = useState(0)
  const [pagesize, setPageSize] = useState(10)
  const [pageData, setPageData] = useState(null)
  let pageMod = null

  

  return (
    <div className = "pageCont">
      {
        props.page_vis != null && props.page_vis == 1 &&
        <div className = "news_outer">
          <News pages = {pages} data = {props.data}></News>
          <div className = "pagebuttons">
              {
                (props.back == 1) &&
                <div className = "cntrlBtns">
                  <button onClick={props.prevPage} id = "backbtn">Prev Page</button>
                </div>

              }
              
              {
                (props.next == 1) &&
                <div className = "cntrlBtns">
                <button onClick={props.nextPage} id = "forwardbtn">Next Page</button>
              </div>
              }
          </div>
        </div>
      }
    </div>

      
      
      

  );
}



export default NewsReel;
