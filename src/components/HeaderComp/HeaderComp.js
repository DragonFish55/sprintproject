import './HeaderComp.css';

function HeaderComp() {
  return (
    <div className="header">
        <div className = "innerheader">
          <div className = "title">
            <p>Main App</p>
          </div>
          <div className = "signin">
            <p className="usertag" >Welcome <span id = "user"></span></p>
            <button id = "signin">Signin</button>
            <button class = "signout" id = "signout">Signout</button>
          </div>
        </div>
    </div>
  );
}

export default HeaderComp;
