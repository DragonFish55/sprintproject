import './SigninPage.css';
import {useNavigate} from 'react-router-dom';
import $ from 'jquery';
import React, {useState} from 'react';

/**
 * 
 * @returns Signin form component 
 * Details: Component that allows the user to enter
 *          details for a user that is already in the database
 *          and validate whether they can login
 * 
 */
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
                usererror !== "" &&
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
                passerror !== "" &&
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

  //resets the error message state variables
  function resetErr(){
    setPassError("")
    setUserError("")
  }

  //on clicking the signup button redirect to signup page
  function goSignup(){
    navigate('/signup', {state:{name:""}});
  }

  //on clicking the main page button redirect to main page
  function goMainPage(){
    navigate('/', {state:{name:""}});
  }

  //function that calls the signin api and checks whether user is valid
  //if not sets appropriate error message
  function checkSignin(){
    const userinput = document.getElementById("userinput").value;
    const passinput = document.getElementById("passinput").value;
    
    const data = {username:userinput, password:passinput};
    
    
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/signin',
      url: 'http://127.0.0.1:5000/api/signin',
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
        setPassError("");
        setUserError("");
        navigate('/', {state:{name:userinput}});
      },
      error: function(data,request,error){
        if(data.responseJSON.user_error === "true"){
          setUserError("Incorrect Username");
        }
        
        if(data.responseJSON.pass_error === "true"){
          setPassError("Incorrect Password");
        }
      }
    })
  };
}

export default SigninPage;
