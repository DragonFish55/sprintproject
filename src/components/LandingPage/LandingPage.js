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
          <div className = "title"><p></p></div>
          <div className = "title"><p></p></div>
        </div>
      
    </div>
  );
  

}

export default LandingPage;
