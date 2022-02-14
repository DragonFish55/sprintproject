import './SigninPage.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

function SigninPage() {

  user_error = ""
  pass_error = ""

  return (
    <div className="signin">
        <div className = "signinheader">
          Signin
        </div>
        <div className = "inputarea">
          <label htmlFor = "userinput">Username *</label>
          <input type = "text" name = "userinput" id = "userinput"  required />
          <label htmlFor = "passinput">Password *</label>
          <input type = "password" name = "passinput" id = "passinput" required />
        </div>
        <div className = "submitbtn">
          <button onClick = {checkSignin} id = "submitbtn">Submit</button>
        </div>
        <div className = "signuplink">
          <Link to ='/signup'> Signup?</Link>
        </div>
    </div>
  );

  function checkSignin(){
    const user = document.getElementById('userinput').value;
    const password = document.getElementById('passinput').value;
    const data = {username:user, password:password};
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/signin',
      url: 'http://127.0.0.1:5000/api/signin',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      data:JSON.stringify(data),
      success: function(data){
        console.log(data);
        if(data.user_error != ""){
          user_error = data.user_error
        }
        if(data.pass_error != ""){
          pass_error = data.pass_error
        }
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
}

export default SigninPage;
