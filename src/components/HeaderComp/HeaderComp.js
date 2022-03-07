import './HeaderComp.css';
import {Link} from 'react-router-dom'
import { React} from 'react';
import $ from 'jquery';

//returns the header component to be put in main page
function HeaderComp(props) {
  
  return (
    
    <div className="header">
        <div className = "innerheader">
          <div className = "title">
            <p>Main App</p>
          </div>
          <div className = "sign_main">
            {
              props.home === true &&
              <Link to = '/'>
                <button className = "homebtn" id = "home">Main Page</button>
              </Link>
            }
            {
              props.settings && props.username && props.username !== "" && 
              <Link to = '/settings'>
                <button className = "settbtn" id = "settings">Settings</button>
              </Link>
            }
            {
              props.username && props.username !== "" && 
              <p className="usertag" >Hello <span id = "user">{props.username}</span>!</p>
            }
            { 
             (props.username === null || props.username === "") && 
              <Link to = '/signin'>
                <button className = "sgnbtn" id = "signin">Signin</button>
              </Link>
            }
            {
             props.username && props.username !== ""  && 
             <button onClick={props.checkLogout} className = "signout" id = "signout">Logout</button>}
            
          </div>
        </div>
    </div>
  );
  
  
  
}

export default HeaderComp;
