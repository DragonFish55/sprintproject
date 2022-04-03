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


  function extractCategories(categories, type){
    let category1 = []
    let category2 = []
    let currCategory = ""
    let tempCategory1 = null
    let tempCategory2 = null
    let tempVal1 = null
    let tempVal2 = null
    let title, author,publish, desc, source, image, url = ""
    for(let i=0; i < categories.length; i++){
        currCategory = categories[i][0]
        console.log(currCategory)
        for(let k = 0; k < categories[i][1].articles.length; k++){
          title = categories[i][1].articles[k].title 
          author = categories[i][1].articles[k].author
          publish = categories[i][1].articles[k].publishedAt
          publish = publish.replace("T", " ")
          publish = publish.replace("Z","")
          desc = categories[i][1].articles[k].description
          image = categories[i][1].articles[k].urlToImage
          url = categories[i][1].articles[k].url
          source = categories[i][1].articles[k].source.name
          category1.push([currCategory, {"title":title, "author":author, "publish":publish, "desc":desc, "image":image, "url":url, "source":source}])
        }
    }
    category2 = category1.slice()

    if(type === "settings"){
      for(let l=0; l < category2.length;l++){
        for(let k = l+1; k < category2.length; k++){
          if(category2[l][1].publish < category2[k][1].publish){
            
            tempCategory1 = category2[l]
            tempCategory2 = category2[k]
            
            category2.splice(l,1, tempCategory2)
            category2.splice(k,1, tempCategory1)

            tempCategory1 = null
            tempCategory2 = null
          }
        }

      }
      
    }
    
    return category2
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
    let extract_data = null
    if(cookiename !== null && cookiename !== ""){
      $.ajax({
        url: "http://127.0.0.1:5000/api/" + cookiename + "/getApiData",
        //url: 'https://gentle-island-18820.herokuapp.com/api/signout',
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          if(data.dataout !== "None"){
            extract_data = extractCategories(data.dataout, "settings")
            setDataSaved(extract_data)
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
          extract_data = extractCategories(data.dataout)
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
    let extract_data = null
      console.log(category)
      $.ajax({
        url: "http://127.0.0.1:5000/api/category/" + category,
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          console.log(data)
          extract_data = extractCategories(data.dataout)
          setDataSaved(extract_data)
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
      console.log("hi")
      cookieLoad()
      console.log("here")
    }
  }



  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp home = {false} settings = {true} username = {username} checkLogout = {checkLogout}></HeaderComp>
        </div>

        <div className='mainpage'>
          <p className = "reeltitle">Welcome to the News Reel!</p>
          <div className='newslinkouter'>
            <NewsLinks categoryData = {handleData} ></NewsLinks>
            </div>
            <button className='refresh' onClick={Refresh}>Refresh For New Articles</button>



          <NewsReel id = "newsreel" data = {datasaved}></NewsReel>

        </div>
    </div>
  )


}

export default LandingPage;
