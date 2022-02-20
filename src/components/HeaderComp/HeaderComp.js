import './HeaderComp.css';
import {Link,useNavigate} from 'react-router-dom'
import { useState, React} from 'react';
import $ from 'jquery';

function HeaderComp(props) {


  const [logout, setLogout] = useState("")
  const navigate = useNavigate();

  return (
    <div className="header">
        <div className = "innerheader">
          <div className = "title">
            <p>Main App</p>
          </div>
          <div className = "sign_main">
            {
              props.username !== "" && <p className="usertag" >Hello <span id = "user">{props.username}</span>!</p>
            }
            { 
             props.username === "" && 
              <Link to = '/signin'>
                <button className = "sgnbtn" id = "signin">Signin</button>
              </Link>
            }
            {props.username !== ""  && <button onClick={checkLogout} className = "signout" id = "signout">Logout</button>}
            
          </div>
        </div>
    </div>
  );

  function checkLogout(){
    navigate('/', {state:{name:""}});
  }

  /*
  function checkLogout(){
    const user = document.getElementById('userinput').value;
    const password = document.getElementById('passinput').value;
    const data = {username:user, password:password};
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/logout',
      url: 'http://127.0.0.1:5000/api/logout',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      data:JSON.stringify(data),
      success: function(data){
        console.log(data);
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
  */
}

export default HeaderComp;
