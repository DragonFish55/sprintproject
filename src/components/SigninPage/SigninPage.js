import './SigninPage.css';
import {Link, useNavigate} from 'react-router-dom';
import $ from 'jquery';
import React, {useState} from 'react';

function SigninPage() {

  const [passerror,setPassError] = useState("")
  const [usererror,setUserError] = useState("")
  const navigate = useNavigate();

  return (
    <div className="signin">
      <section className="left-section">
        <div id="left-form" className="form">
          <h1>Login</h1>
          <div className = "innerform">
            <div className='userin_div'>
              <input
                id="userinput"
                type="text"
                name="user-name"
                className="input-box"
                placeholder="User Name"
                onClick={resetErr}
              />
              {
                usererror != "" &&
                <label htmlFor="user-name">{usererror}</label>
              }
             

            </div>
            <div className='passin_div'>
              <input
                id="passinput"
                type="password"
                name="user-pass"
                className="input-box"
                placeholder="Password"
                onClick={resetErr}
              />
              {
                passerror != "" &&
                <label id = "passerr_lbl" htmlFor="user-pass">{passerror}</label>
              }
              
              
            </div>
            
            <button
                name="login-btn"
                onClick={checkSignin}
                className="btn"
              >Login</button>
            <div className = "navbtns">
              
              <button
                      id = "submitbtn"
                      name="signup-btn"
                      onClick={goSignup}
                      className="btn"
                      
              >Signup?</button>
              <button
                      id = "submitbtn"
                      name="signup-btn"
                      onClick={goMainPage}
                      className="btn"
                      
              >Main Page</button>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );

  function resetErr(){
    setPassError("")
    setUserError("")
  }

  function goSignup(){
    navigate('/signup', {state:{name:""}});
  }

  function goMainPage(){
    navigate('/', {state:{name:""}});
  }


  function checkSignin(){
    const userinput = document.getElementById("userinput").value;
    const passinput = document.getElementById("passinput").value;
    //const passerr_lbl = document.getElementById("passerr_lbl").value;
    
    const data = {username:userinput, password:passinput};
    let error = false
    $.ajax({
      url: 'https://lit-dawn-76000.herokuapp.com/api/signin',
      //url: 'http://127.0.0.1:5000/api/signin',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      data:JSON.stringify(data),
      success: function(data,xhr){
        
        
        if(data.user_error === "true"){
          setUserError("Incorrect Username");
          error = true
          
        }
        else{
          setPassError("");
        }
        
        if(data.pass_error === "true"){
          setPassError("Incorrect Password");
          error = true
         // passerr_lbl.style.display = "block"; 
        }
        else{
          setPassError("");
        }
        
        if(error !== true){
          navigate('/', {state:{name:userinput}});
        }
        
          
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
}

export default SigninPage;
