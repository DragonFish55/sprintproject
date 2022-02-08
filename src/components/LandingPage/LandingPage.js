import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp></HeaderComp>
        </div>
        <div className='mainpage'>
          <p>Hello World</p>
        </div>
    </div>
  );
}

export default LandingPage;
