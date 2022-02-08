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
            <button class = "signout" id = "signout">Signout</button>
          </div>
        </div>
    </div>
  );
}

export default HeaderComp;
