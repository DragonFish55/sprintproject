import './SignupPage.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

function SignupPage() {
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

  function checkSignup(){
      const userinput = document.getElementById('userinput');
      const passinput = document.getElementById('passinput');
      const confirmpass = document.getElementById('confirmpass');

      console.log('there');
      $.ajax({
        url:'/signup',
        method:'POST',
        crossDomain:true,
        cache:false,
        data:{userinput:userinput, passinput:passinput, confirmpass:confirmpass},
        success: function(data){
          console.log(data);
        },
        error: function(request,error){
          console.log(error)
        }
      });
      
     console.log({userinput:userinput, passinput:passinput, confirmpass:confirmpass});
  };
}

export default SignupPage;
