import './HeaderComp.css';
import {Link} from 'react-router-dom'
import { React} from 'react';
import $ from 'jquery';

import {connect} from 'react-redux';

import {
  setUserNameVal,
} from "../../redux/User/username.actions"

//returns the header component to be put in main page
function HeaderComp(props) {


  let username = props.username.username
  console.log(username) 
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
              
             username !== null  && username !== undefined &&
              <p className="usertag" >Hello, <span id = "user">{username}</span>!</p>
            }
            {
              props.settings != null && username != null && username != undefined &&
              <Link to = '/settings'>
                <button className = "settbtn" id = "settings">Settings</button>
              </Link>
            }

            {
             (username === undefined || username === null || username === "") &&
              <Link to = '/signin'>
                <button name = "signin" className = "sgnbtn" id = "signin">Signin</button>
              </Link>
            }
            {
             username !== undefined && username !== null && username !== ""  &&
             <button onClick={props.checkLogout} className = "signout" id = "signout">Logout</button>}

          </div>
        </div>
    </div>
  );



}


const mapStateToProps = state => {
  return {
    username: state.username,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserNameVal: (value) => dispatch({
      type:"SETUSERVAL",
      value:value
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);
