import HeaderComp from '../HeaderComp/HeaderComp';
import './SettingsPage.css';
import '../LandingPage/LandingPage.css'
import {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import coockiecheck from '../../cookiecheck';
import Settings from '../Settings/Settings';

//returns main page component of the frontend app
function SettingsPage(props) {
  
  const checkRef = useRef(null)
  const [username, setUserName] = useState(null)
  const navigate = useNavigate();
  let cookiename = null

  
  let category_obj =  {"general":false, "health":false, "entertainment":false,
                    "sports":false, "business":false, "science":false, 
                    "technology":false}
                     

  const [category_state, setCategory] = useState(category_obj)
  let categories = null

  useEffect( () => {
    cookiename = checkCookies()
    getCategoryAccount(cookiename)
    console.log(category_obj)
      
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
          console.log("success")
          checkCookies();
          navigate('/'); 
        }      
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };

  
  

function getCategoryAccount(cookie){
  console.log(cookie)
  if(cookie !== null && cookie !== ""){
      $.ajax({
      url: "http://127.0.0.1:5000/api/" + cookie + "/getCategoryList",
      //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
      type: 'GET',
      crossorigin: true,
      cache:false,
      success: function(data,xhr){
        if(data != "None"){
          categories = data.dataout
          console.log(categories)
          let cat_update = parseCategories()
          setCategory(cat_update)
        } 
          
      },
      error: function(request,error){
          console.log(error);
      }
      })
  }
}
  

function parseCategories(){
  
  let cat_local =  {"general":false, "health":false, "entertainment":false,
                    "sports":false, "business":false, "science":false, 
                    "technology":false}

  categories.map((obj, index) => {
      if (categories[index].toUpperCase() === "General".toUpperCase()){
          cat_local.general = true
      } else if (categories[index].toUpperCase() === "Health".toUpperCase()){
          cat_local.health = true
      } else if (categories[index].toUpperCase() === "Sports".toUpperCase()){
          cat_local.sports = true
      } else if (categories[index].toUpperCase() === "Science".toUpperCase()){
          cat_local.science = true
      } else if (categories[index].toUpperCase() === "Entertainment".toUpperCase()){
          cat_local.entertainment = true
      } else if (categories[index].toUpperCase() === "Business".toUpperCase()){
          cat_local.business = true
      } else if (categories[index].toUpperCase() === "Technology".toUpperCase()){
          cat_local.technology = true
      } else {
          console.log("error invalid type")
      }
  })
  return cat_local
  
}

  return (
    <div className="settingspage">
        <div className = "header_outer">
          <HeaderComp home = {true} settings = {null} username = {username} checkLogout = {checkLogout}></HeaderComp>
        </div>
        <Settings categories={category_state}></Settings>
        
    </div>
  )
  

}

export default SettingsPage;