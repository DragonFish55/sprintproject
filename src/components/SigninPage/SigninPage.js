import './SigninPage.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

function SigninPage() {
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
          <button onClick = {checkInfo} id = "submitbtn">Submit</button>
        </div>
        <div className = "signuplink">
          <Link to ='/signup'> Signup?</Link>
        </div>
    </div>
  );

  function checkInfo(){
    const user = document.getElementById('userinput');
    const password = document.getElementById('passinput');
    console.log('hi')
    $.ajax({
      url: 'https://127.0.0.1/signup',
      method: 'POST',
      crossDomain: true,
      cache:false,
      data:{user:user, password:password},
      success: function(data){
        console.log(data);
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
}

export default SigninPage;
