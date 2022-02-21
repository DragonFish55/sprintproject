import './SignupPage.css';
import {Link, useNavigate} from 'react-router-dom';
import $ from 'jquery';
import React,{useState} from 'react';

function SignupPage() {
  
  const [user_error, setUser] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [pass3, setPass3] = useState("");
  const [pass4, setPass4] = useState("");
  const [pass5, setPass5] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signup">
        <section className="right-section">
          <div id="right-form" className="form">
            <h1>Signup</h1>
            <div className = "innerform">
              <div className = "userin">
                <input
                  id="userinput"
                  type="text"
                  name="user-name"
                  className="input-box"
                  placeholder="User Name"
                  onClick={resetErrors}
                />
                {user_error !== "" && <label htmlFor="user-name">{user_error}</label>}
              </div>
              <div className = "passin">
                <input
                  id="passinput"
                  type="password"
                  name="user-pass"
                  className="input-box"
                  placeholder="Password"
                  onClick={resetErrors}
                />
                {
                  pass1 !== "" &&
                  <div className = "pass_err_div">
                    {pass1 !== "" && <label htmlFor="user-pass">{pass1}</label>}
                  </div>
                }
                {
                  pass2 !== "" &&
                  <div className = "pass_err_div">
                    {pass2 !== "" && <label htmlFor="user-pass">{pass2}</label>}
                  </div>
                }
                {
                  pass3 !== "" &&
                  <div className = "pass_err_div">
                    {pass3 !== "" && <label htmlFor="user-pass">{pass3}</label>}
                  </div>
                }
              </div>
              
              <div className='confirm_div'>
                <input
                  id="confirmpass"
                  type="password"
                  name="user-cpass"
                  className="input-box"
                  placeholder="Confirm Password"
                  onClick={resetErrors}
                />
                {pass4 !== "" && <label htmlFor="user-pass">{pass4}</label>}
                {pass5 !== "" && <label htmlFor="user-pass">{pass5}</label>}
              </div>

              
              
              <div className = "navbtns">
                <button
                    id =  "homebtn"
                    name="signup-btn"
                    onClick={goSignin}
                    className="btn"  
                  >Login?</button>
                  <button
                    id = "submitbtn"
                    name="signup-btn"
                    onClick={checkSignup}
                    className="btn"
                    
                  >Signup</button>
                  
              </div>
              
            </div>
          </div>
          {
            confirm && confirm != "" && 
            <div className = "usercreate">{confirm}</div>
          }
        </section>
        
    </div>
    
  );


  function resetErrors(){
    setUser("");
    setPass1("");
    setPass2("");
    setPass3("");
    setPass4("");
    setPass5("");
    setConfirm("");
  }

  function goSignin(){
    navigate('/signin', {state:{name:""}});
  }


  function callApi(url,datain){
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/signup',
      //url: 'http://127.0.0.1:5000/api/signup',
      url: url,
      type:'POST',
      crossorigin:true,
      cache:false,
      dataType:"json",
      contentType: "application/json",
      data:JSON.stringify(datain),
      success: function(data){
        if(data.data_out === "true"){
          setConfirm("User successfully created");
        }
        else{
          setConfirm("");
        }
      },
      error: function(request,error){
        console.log(error)
      }
    });
  };


  function checkLowerChar(password){
    let k = 0;

    for(let i = 0; i < password.length;i++){
      if(password[i] === password[i].toLowerCase()){
        k = 1;
      }
    }
    if(k === 1){
      return true;
    } 
    else{return false}
  }

  function checkUpperChar(password){
    let k = 0;
    for(let i = 0; i < password.length ;i++){
      if(password[i] === password[i].toUpperCase()){
        k = 1;
      }
    }
    if(k === 1){
      return true;
    } 
    else{
      return false
    }
  }

  function checkNotLetter(password){
    let k = 0;
    let reg = /[a-zA-Z]/;
    for(let i = 0; i < password.length;i++){
      if(!(password[i].match(reg))){
        k = 1
      }
    }
    if(k === 1){
      return true
    }
    else{
      return false
    }
  }

  function checkLength(stringIn, length){
    if(stringIn.length >= length){
      return true;
    }
    else{
      return false
    }
  }


  function checkSignup(){

      let url = 'https://lit-dawn-76000.herokuapp.com/api/signup'
      let error = false
      let userinput = document.getElementById('userinput').value;
      let passinput = document.getElementById('passinput').value;
      let confirmpass = document.getElementById('confirmpass').value;

      userinput = userinput.replaceAll(' ', '')
      passinput = passinput.replaceAll(' ', '')
      confirmpass = confirmpass.replaceAll(' ', '')
      

      resetErrors();
      
      if(checkLength(userinput,8) === false){
        setUser("400 - Username does not contain at least 8 characters")
        error = true
      }

      if(checkLength(passinput,8) === false){
        setPass1("400 - Password does not contain at least 8 characters");
        
        error = true
      }

      
      
      if(checkNotLetter(passinput) === false){
        setPass2("400 - Password does not contain at least one non letter")
        error = true
      }
            
      if(checkUpperChar(passinput) === false){
        setPass3("400 - Password does not contain an uppercase character")
        error = true
      }
      
      if(checkLowerChar(passinput) === false){
        setPass4("400 - Password does not contain a lowercase character")
        error = true
      }
      
      
      if(!(passinput === confirmpass)){
        setPass5("400 - Passwords do not match or are blank")
        error = true
      }
      else{
        if((passinput === confirmpass) && passinput===""){
          setPass5("400 - Passwords do not match or are blank")
        }
      }
     
      if(error === false){
        let data = {username:userinput, password:passinput};
        callApi(url, data)
      }
      
  };
}

export default SignupPage;
