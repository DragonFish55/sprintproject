import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import coockiecheck from '../../cookiecheck';
import NewsReel from '../NewsReel/NewsReel';
import NewsLinks from '../NewsLinks/NewsLinks';

//returns main page component of the frontend app
function LandingPage() {
  
  const [datasaved, setDataSaved] = useState(null)
  const [username, setUserName] = useState(null)
  const navigate = useNavigate();
  const [categoryType, setType] = useState(null)

  useEffect( () => {
    cookieLoad()
  }, []);
  
  function cookieLoad(){
    let cookiename = checkCookies()
    if(cookiename !== null){
      checkApi(cookiename)
    } else{
      checkApi(null)
    }
  }

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
      //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
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
        //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          if(data.dataout !== "None"){
            console.log(data.dataout)
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
        //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
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

  /*
  function checkEverything(){
      let queryEvery = document.getElementById("queryinput");

      $.ajax({
        url: "http://127.0.0.1:5000/api/everything/defaultApi?q=" + queryEvery,
        //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
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
  */

  function Refresh(){
    let cookiename = checkCookies()
    if(cookiename !== null){
      checkApi(cookiename)
    } else{
      checkApi(null)
    }
  }


  function getCategory(category){
      console.log(category)
      $.ajax({
        url: "http://127.0.0.1:5000/api/category/" + category,
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          console.log(data)
          setDataSaved(data.dataout)
        },
        error: function(request,error){
          console.log(error);
        }
      })
  }

  function handleData(value){
    let category = value.name
    console.log(category)
    if(category !== "Home"){
      getCategory(category)
    } else {
      cookieLoad()
    }
  }
  
  
  
  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp home = {false} settings = {true} username = {username} checkLogout = {checkLogout}></HeaderComp>
        </div>
        
        <div className='mainpage'>
          <p className = "reeltitle">News Reel</p>
          <div className='newslinkouter'>
            <NewsLinks categoryData = {handleData} ></NewsLinks>
          </div>

            <button className='refresh' onClick={Refresh}>Refresh</button>
        

          
          <NewsReel id = "newsreel" cat_type = {categoryType} data = {datasaved}></NewsReel>
          
        </div>
    </div>
  )
  

}

export default LandingPage;