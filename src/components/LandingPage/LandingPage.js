import HeaderComp from '../HeaderComp/HeaderComp';
import './LandingPage.css';
import { useLocation} from 'react-router-dom';


function LandingPage(props) {
  
  const {state} = useLocation();
  
  
  return (
    <div className="landing">
        <div className = "header_outer">
          <HeaderComp username = {state.name}></HeaderComp>
        </div>
        <div className='mainpage'>
          <p>Hello World</p>
        </div>
      
    </div>
  );
  

}

export default LandingPage;
