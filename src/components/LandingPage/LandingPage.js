import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import coockiecheck from '../../cookiecheck';
import NewsReel from '../NewsReel/NewsReel';
import NewsLinks from '../NewsLinks/NewsLinks';
import {connect} from 'react-redux';

import {
  setUserNameVal,
} from "../../redux/User/username.actions"

//returns main page component of the frontend app
function LandingPage(props) {

  let username = props.username.username
  const [datasaved, setDataSaved] = useState(null)
  const navigate = useNavigate();
  const [categoryType, setType] = useState(null)
  const [pagenum, setPageNum] = useState(null)
  const [pagesize, setPageSize] = useState(10)
  const [currPage, setCurrPage] = useState(0)
  const [backvis, setBackVis] = useState(null)
  const [nextVis, setNextVis] = useState(null)
  const [pageVis, setPageVis] = useState(null)
  const [searchErr, setSearchErr] = useState(null)

  useEffect( () => {
    
    setBackVis(0)
    cookieLoad()
  }, []);

  function cookieLoad(){
    let cookiename = checkCookies()
    if(cookiename !== null){
      checkApi(cookiename)
    } else{
      if(username != null && username != undefined){
        checkApi(username)
      } else{
        checkApi(null)
      }
    }
  }


  function checkCookies(){
    let cookies = document.cookie
    let cookie = null
    let check = coockiecheck(cookies, "username")
    if(check !== ""){
      cookie = check
    } else{
      cookie = null
    }
    return cookie
  }

  function paginateData(categories){
      let data_mod = []
      let temp_data = []
      let data_in = []
      let pagemod = categories.length%pagesize
      let page_nums = categories.length/pagesize


      if(categories.length > 250){
        for(let i = 0; i < 250; i++){
          data_in.push(categories[i])
        }
      } else{
        data_in = categories
      }

      if(pagemod !== 0){
        setPageNum(page_nums + 1)
        page_nums = page_nums + 1
      } else{
        setPageNum(page_nums)
      }
      
      page_nums = Math.ceil(page_nums)
  
      let x = new Array(page_nums)
      x.fill(0)
      x[0] = 1
      setPageVis(x)
      setCurrPage(0)

      for(let i = 0; i < data_in.length; i++){
        temp_data.push(data_in[i])
        if(((i+1)%pagesize) == 0 || (i+1) == data_in.length){
          data_mod.push(temp_data)
          
          temp_data = []
        }
      }

      
      
      return data_mod

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
          props.setUserNameVal(null)
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
    let paginate_data = null
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
            paginate_data = paginateData(extract_data)
            setDataSaved(paginate_data)
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
          paginate_data = paginateData(extract_data)
          setDataSaved(paginate_data)
        },
        error: function(request,error){
          console.log(error);
        }
      })
    }

  }

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
    let paginate_data = null
      $.ajax({
        url: "http://127.0.0.1:5000/api/category/" + category,
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
          
          extract_data = extractCategories(data.dataout)
          paginate_data = paginateData(extract_data)
          setDataSaved(paginate_data)
        },
        error: function(request,error){
          console.log(error);
        }
      })
  }

  function handleData(value){
    let category = value.name
    if(category !== "Home"){
      getCategory(category)
    } else {
      cookieLoad()
    }
  }

  function searchEvery(){
    let extract_data = null
    let paginate_data = null
    let searchText = document.getElementById("searchtext").value
    $.ajax({
      url: "http://127.0.0.1:5000/api/search/" + searchText,
      type: 'GET',
      crossorigin: true,
      cache:false,
      success: function(data,xhr){
        
        
        if("articles" in data.dataout[0][1]) {
          
          
          if(data.dataout[0][1].articles.length > 0){
            
            extract_data = extractCategories(data.dataout, "settings")
            
            paginate_data = paginateData(extract_data)
            setSearchErr(null)
            setDataSaved(paginate_data)
          } else {
            setSearchErr("Error: No Entries found")
          }
        } else {
          if("code" in data.dataout[0][1]){
            
            setSearchErr("Error: Inalid Search Expression")
            cookieLoad()
          } 
        }
        
      },
      error: function(request,error){
        
        console.log(error);
      }
    })
  }



  

  function checkSearch(){
    let searchText = document.getElementById("searchtext").value
    setSearchErr(null)
    if(searchText == ""){
      cookieLoad()
    }
  }


  function prevPage(){
    if(pageVis){
      let tempArray1 = pageVis
      for(let i = 0; i < pageVis.length; i++){
        if(pageVis[i] == 1){
          tempArray1[i] = 0
          tempArray1[i-1] = 1
          setPageVis(tempArray1)
          setCurrPage(i-1)
          break
        }
      }

    }
    
  }
  

  function nextPage(){
    
    if(pageVis){
      let tempArray1 = pageVis
      for(let i = 0; i < pageVis.length; i++){
        if(pageVis[i] == 1){
          tempArray1[i] = 0
          tempArray1[i+1] = 1
          setPageVis(tempArray1)
          setCurrPage(i+1)
          break
        }
      }

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
          <div className="inputsearch">
            <input onBlur={checkSearch} id = "searchtext" type = "text" placeholder='Query News'></input>
            <button onClick={searchEvery}>Search</button>
            
          </div>
          {
              searchErr != null && 
              <label>{searchErr}</label>
            }
          
          <div id = "reelouter" className = "reelouter">
            {
              
              datasaved && 
              datasaved.map((object, index) => {
                return(
                  
                  <div className='reelinner'>
                    {
                      
                      currPage==0 && (datasaved.length > 1) &&
                      <NewsReel key = {index} back = {0} next = {1} page_num = {index} page_vis = {pageVis[index]} nextPage = {nextPage} prevPage = {prevPage} id = "newsreel" data = {datasaved[index]}></NewsReel>
                    }
                    {
                      currPage == datasaved.length-1 && currPage != 0 &&
                      <NewsReel key = {index+1} back = {1} next = {0} page_num = {index} page_vis = {pageVis[index]} nextPage = {nextPage} prevPage = {prevPage} id = "newsreel" data = {datasaved[index]}></NewsReel>
                    }
                    {
                      (datasaved.length == 1) && currPage == 0 &&
                      <NewsReel key = {index+1} back = {0} next = {0} page_num = {index} page_vis = {pageVis[index]} nextPage = {nextPage} prevPage = {prevPage} id = "newsreel" data = {datasaved[index]}></NewsReel>
                    }
                    {
                      
                      currPage != 0 && currPage!=datasaved.length-1 &&
                      <NewsReel key = {index+2} back = {1} next = {1} page_num = {index} page_vis = {pageVis[index]} nextPage = {nextPage} prevPage = {prevPage} id = "newsreel" data = {datasaved[index]}></NewsReel>
                    }
                </div>
              
                )
              })
            }
          </div>
          
         

          

        </div>
    </div>
  )


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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
