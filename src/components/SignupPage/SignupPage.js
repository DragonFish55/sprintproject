import './SignupPage.css';
import {Link, useSearchParams} from 'react-router-dom';
import $ from 'jquery';

function SignupPage() {

  user_error = ""
  pass_error1 = ""
  pass_error2 = ""
  pass_error3 = ""
  pass_error4 = ""
  pass_error5 = ""

  return (
    <div className="signup">
        <div className = "signupheader">
          Signup
        </div>
        <div className = "inputarea">
          <label htmlFor = "userinput">Username *</label>
          <input type = "text" name = "userinput" id = "userinput" required />
          <label htmlFor = "passinput">Password *</label>
          <input type = "password" name = "passinput" id = "passinput" required />
          <label htmlFor = "confirmpass">Confirm Password *</label>
          <input type = "password" name = "confirmpass" id = "confirmpass" required />
        </div>
        <div className = "submitbtn">
          <button onClick = {checkSignup} id = "submitbtn">Submit</button>
        </div>
        <div className = "signinlink">
          <Link to ='/signin'> Signin?</Link>
        </div>
    </div>
    
  );


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
        console.log(data);
      },
      error: function(request,error){
        console.log(error)
      }
    });
  };

  function checkLowerChar(password){
    k = 0;
    for(i = 0; i < len(password);i++){
      if(password[i] == password[i].toLowerCase()){
        k = 1;
      }
    }
    if(k == 1) return true;
  }

  function checkUpperChar(password){
    k = 0;
    for(i = 0; i < len(password);i++){
      if(password[i] == password[i].toUpperCase()){
        k = 1;
      }
    }
    if(k == 1) return true;
  }

  function checkNotLetter(password){
    k = 0;
    reg = /[a-zA-Z]/;
    for(i = 0; i < len(password);i++){
      if(not(password[i].match(reg))){
        k = 1
      }
    }
    if(k == 1) return true
  }

  function checkLength(stringIn, length){
    if(len(stringIn) >= length){
      return true
    }
  }


  function checkSignup(){
      url = 'http://127.0.0.1:5000/api/signup'
      error = false
      let userinput = document.getElementById('userinput').value;
      let passinput = document.getElementById('passinput').value;
      let confirmpass = document.getElementById('confirmpass').value;

      userinput = userinput.trim()
      passinput = passinput.trim()
      confirmpass = confirmpass.trim()

      if(checkLength(userinput,8) == false){
        user_error = "400 - Username not at least 8 characters"
        error = true
      }
      if(checkLength(passinput,8) == false){
        pass_error1 = "400 - Password not at least 8 characters"
        error = true
      }
      if(checkNotLetter(passinput) == false){
        pass_error2 = "400 - Password does not contain at least one non letter"
        error = true
      }
      if(checkUpperChar(passinput) == false){
        pass_error3 = "400 - Password does not contain an uppercase character"
        error = true
      }
      if(checkLowerChar(passinput == false)){
        pass_error4 = "400 - Password does not contain a lowercase character"
        error = true
      }
      if(not(passinput == userinput)){
        pass_error5 = "400 - Passwords do not match"
        error = true
      }
      if(error == false){
        data = {username:userinput, password:passinput};
        callApi(url, data)
      }
      
  };
}

export default SignupPage;
