import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SigninPage from './components/SigninPage/SigninPage';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<LandingPage />}></Route>
        <Route path = 'signin' element={<SigninPage />}></Route>
        <Route path = 'signup' element={<SignupPage />}></Route>
        <Route path = "*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
