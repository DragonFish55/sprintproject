import './HeaderComp.css';
import {Link,useNavigate} from 'react-router-dom'
import { React} from 'react';
import $ from 'jquery';

//returns the header component to be put in main page
function HeaderComp(props) {


  const navigate = useNavigate();
    
  return (
    <div className="header">
        <div className = "innerheader">
          <div className = "title">
            <p>Main App</p>
          </div>
          <div className = "sign_main">
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
             <button onClick={checkLogout} className = "signout" id = "signout">Logout</button>}
            
          </div>
        </div>
    </div>
  );
  
  function checkLogout(){
    const user = props.username
    const data = {username:user}
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/logout',
      url: 'https://lit-dawn-76000.herokuapp.com/api/signout',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      data:JSON.stringify(data),
      success: function(data,xhr){
        if(data.user_error === "true"){
          navigate('/', {state:{name:""}});
        }
        
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
  
}

export default HeaderComp;
