import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import coockiecheck from '../../cookiecheck';
import NewsReel from '../NewsReel/NewsReel';

//returns main page component of the frontend app
function LandingPage(props) {
  
  const [datasaved, setDataSaved] = useState(null)
  const [username, setUserName] = useState(null)
  const [logged, setLogged] = useState(null)
  const navigate = useNavigate();
  let log1 = false

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
          setLogged(null);
          checkApi(null)
          checkCookies();
          navigate('/');
          
        }
        
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };

  function checkApi(cookiename){
    if(cookiename !== null && cookiename !== ""){
      $.ajax({
        url: "http://127.0.0.1:5000/api/" + cookiename + "/getApiData",
        //url: 'https://lit-dawn-76000.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          if(data.dataout !== "None"){
            setDataSaved(data.dataout)
          } else{
            checkApi(null)
          }
            
        },
        error: function(request,error){
          console.log(error);
        }
      })
    } else{
      $.ajax({
        url: "http://127.0.0.1:5000/api/top_headline/defaultApi",
        //url: 'https://lit-dawn-76000.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          setDataSaved(data.dataout)
        },
        error: function(request,error){
          console.log(error);
        }
      })
    }
    
  }

  function checkEverything(){
      let queryEvery = document.getElementById("queryinput");

      $.ajax({
        url: "http://127.0.0.1:5000/api/everything/defaultApi?q=" + queryEvery,
        //url: 'https://lit-dawn-76000.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          console.log(data)
          //setDataSaved(data.dataout)
        },
        error: function(request,error){
          console.log(error);
        }
      })
  }
  
  
  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp home = {false} settings = {true} username = {username} checkLogout = {checkLogout}></HeaderComp>
        </div>
        
        <div className='mainpage'>
        <p className = "reeltitle">News Reel</p>
          <div className = "sections">
            <button className='topquery'>Top Headlines</button>
            <button className='everyquery'>Query Input</button>
            
          </div>
          <div className = "everything">
            <p>Enter a topic to show relevant articles</p>
            <label htmlFor='queryinput'>Topic</label>
            <input type = "text" name = "queryinput" id = "queryinput" />
            <button onClick={checkEverything} name = "querysubmit" id = "querysubmit">Submit</button>
            <NewsReel data = {datasaved}></NewsReel>
          </div>
          <div className = "topheadlines">
            <NewsReel className="newsreel" data = {datasaved}></NewsReel>
          </div>
          
          
        </div>
    </div>
  )
  

}

export default LandingPage;