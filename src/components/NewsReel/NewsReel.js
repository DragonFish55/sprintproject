import './NewsReel.css';
import {Link} from 'react-router-dom'
import {React} from 'react';
import $ from 'jquery';
import News from '../News/News';

//returns the header component to be put in main page
function NewsReel(props) {

  return (
      <div className = "news_outer">
         <News data = {props.data}></News>

      </div>

  );
}



export default NewsReel;
