import './HeaderComp.css';
import {Link} from 'react-router-dom'

function HeaderComp() {
  return (
    <div className="header">
        <div className = "innerheader">
          <div className = "title">
            <p>Main App</p>
          </div>
          <div className = "signin">
            <p className="usertag" >Welcome <span id = "user"></span></p>
            <Link to = '/signin'>
              <button id = "signin">Signin</button>
            </Link>
            <button onClick={checkLogout} className = "signout" id = "signout">Logout</button>
          </div>
        </div>
    </div>
  );

  function checkLogout(){
    const user = document.getElementById('userinput').value;
    const password = document.getElementById('passinput').value;
    const data = {username:user, password:password};
    $.ajax({
      //url: 'https://lit-dawn-76000.herokuapp.com/api/logout',
      url: 'http://127.0.0.1:5000/api/logout',
      type: 'POST',
      crossorigin: true,
      cache:false,
      dataType: "json",
      contentType: "application/json",
      data:JSON.stringify(data),
      success: function(data){
        console.log(data);
      },
      error: function(request,error){
        console.log(error);
      }
    })
  };
}

export default HeaderComp;
