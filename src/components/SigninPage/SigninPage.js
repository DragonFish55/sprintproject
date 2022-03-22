import './SigninPage.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import news from '../../Assets/news.json';

/**
 *
 * @returns Signin form component
 * Details: Component that allows the user to enter
 *          details for a user that is already in the database
 *          and validate whether they can login
 *
 */
function SigninPage() {
  const [passerror, setPassError] = useState('');
  const [usererror, setUserError] = useState('');
  const navigate = useNavigate();

  return (
    <div className='signin'>
      <section className='left-section'>
        {/* <div className='signuptxtcontainer'>
          <div className='mainpage' onClick={goSignup}>
            {`< Go to Main Page`}
          </div>
        </div> */}
        <Lottie animationData={news} style={{ width: '40%' }} loop={true} />
        <div id='left-form' className='form'>
          <h1>Login</h1>
          <div className='innerform'>
            <div className='userin_div'>
              <input
                id='userinput'
                type='text'
                name='user-name'
                className='input-box'
                placeholder='User Name'
                onClick={resetErr}
              />
              {usererror !== '' && (
                <label htmlFor='user-name'>{usererror}</label>
              )}
            </div>
            <div className='passin_div'>
              <input
                id='passinput'
                type='password'
                name='user-pass'
                className='input-box'
                placeholder='Password'
                onClick={resetErr}
              />
              {passerror !== '' && (
                <label id='passerr_lbl' htmlFor='user-pass'>
                  {passerror}
                </label>
              )}
            </div>
            <div className='loginbtnContainer'>
              <button
                name='login-btn'
                onClick={checkSignin}
                className='loginbtn'
              >
                Login
              </button>
            </div>
            <div className='navbtns'>
              <div className='signuptxtcontainer'>
                <div className='signuptxt'>New here?</div>
                <div className='signuplink' onClick={goSignup}>
                  Signup now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  //resets the error message state variables
  function resetErr() {
    setPassError('');
    setUserError('');
  }

  //on clicking the signup button redirect to signup page
  function goSignup() {
    navigate('/signup', { state: { name: '' } });
  }

  //on clicking the main page button redirect to main page
  function goMainPage() {
    navigate('/', { state: { name: '' } });
  }

  //function that calls the signin api and checks whether user is valid
  //if not sets appropriate error message
  function checkSignin() {
    const userinput = document.getElementById('userinput').value;
    const passinput = document.getElementById('passinput').value;

    const data = { username: userinput, password: passinput };

    $.ajax({
      //url: 'https://gentle-island-18820.herokuapp.com/api/signin',
      url: 'http://127.0.0.1:5000/api/signin',
      type: 'POST',
      crossorigin: true,
      cache: false,
      dataType: 'json',
      contentType: 'application/json',
      credentials: 'include',
      xhrFields: {
        withCredentials: true,
      },
      data: JSON.stringify(data),
      success: function (data, xhr) {
        setPassError('');
        setUserError('');
        navigate('/', { state: { name: userinput } });
      },
      error: function (data, request, error) {
        if (data.responseJSON.user_error === 'true') {
          setUserError('Incorrect Username');
        }

        if (data.responseJSON.pass_error === 'true') {
          setPassError('Incorrect Password');
        }
      },
    });
  }
}

export default SigninPage;