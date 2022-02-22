import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';
import { useLocation} from 'react-router-dom';

//returns main page component of the frontend app
function LandingPage(props) {
  
  const {state} = useLocation();
  
  
  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp username = {state && state.name}></HeaderComp>
        </div>
        <div className='mainpage'>
          <div className="center">
            <h1>Hello, welcome to the Team Z website!</h1>
            <h3>Group Members: John Paglia, Harshal Bhole, Megan Resurreccion</h3>
          </div>
        </div>
      
    </div>
  );
  

}

export default LandingPage;
