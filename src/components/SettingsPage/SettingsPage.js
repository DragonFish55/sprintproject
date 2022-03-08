import HeaderComp from '../HeaderComp/HeaderComp';
import './SettingsPage.css';
import '../LandingPage/LandingPage.css'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import coockiecheck from '../../cookiecheck';
import Settings from '../Settings/Settings';

//returns main page component of the frontend app
function SettingsPage(props) {
  
  const [username, setUserName] = useState(null)
  const [logged, setLogged] = useState(null)
  const navigate = useNavigate();
  
  useEffect( () => {
    let cookiename = checkCookies()
    if(cookiename !== null){
      setLogged(true)
      checkApi(cookiename)
    } else{
      setLogged(false)
      checkApi(null)
    }
  }, []);

  function checkCookies(){
    let cookies = document.cookie
    let cookie = null
    let check = coockiecheck(cookies, "username")
    if(check !== ""){
      cookie = check
      setUserName(check)
    } else{
      cookie = null
      setUserName(null)
    }
    return cookie
  }

  function checkApi(cookiename){
    console.log(cookiename)
    if(cookiename !== null && cookiename !== ""){
      $.ajax({
        url: "http://127.0.0.1:5000/api/" + cookiename + "/getApiData",
        //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          console.log("success")
        },
        error: function(request,error){
          console.log(error);
        }
      })
    } else{
      $.ajax({
        url: "http://127.0.0.1:5000/api/defaultApi",
        //url: 'https://gentle-island-18820.herokuapp.com/api/defaultApi',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          console.log("success")
        },
        error: function(request,error){
          console.log(error);
        }
      })
    }
    
  }

  function checkLogout(){
    const user = username
    const data = {"username":user}
    $.ajax({
      url: 'http://127.0.0.1:5000/api/signout',
      //url: 'https://lit-dawn-76000.herokuapp.com/api/signout',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      credentials: "include",
      xhrFields: {
        withCredentials: true
      },
      data:JSON.stringify(data),
      success: function(data,xhr){
        if(data.user_error === "true"){
          console.log("success")
          checkApi(null);
          setLogged(null);
          checkCookies();
          navigate('/'); 
        }      
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };

  

  return (
    <div className="settingspage">
        <div className = "header_outer">
          <HeaderComp home = {true} settings = {null} username = {username} checkLogout = {checkLogout}></HeaderComp>
        </div>
        <Settings></Settings>
    </div>
  )
  

}

export default SettingsPage;