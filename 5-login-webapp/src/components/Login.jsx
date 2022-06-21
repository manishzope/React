import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGIN_STATUS = {
  INIT: 'init',
  SUCCESS: 'success',
  FAILED: 'failed',
};

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.INIT);
  const [errorMessage, setErrorMessage] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus === LOGIN_STATUS.SUCCESS) {
      setErrorMessage('Success');
    } else if (loginStatus === LOGIN_STATUS.FAILED) {
      setErrorMessage('Something went wrong. Please try again!');
    }
  }, [loginStatus]);
  const loginHandler = (e) => {
    e.preventDefault();

    if (
      usernameRef.current.value === 'admin' &&
      passwordRef.current.value === 'admin'
    ) {
      setLoginStatus(LOGIN_STATUS.SUCCESS);
      sessionStorage.setItem('isLoggedIn', true);

      navigate('/');
    } else {
      setLoginStatus(LOGIN_STATUS.FAILED);
      if (sessionStorage.getItem('isLoggedIn')) {
        sessionStorage.removeItem('isLoggedIn');
      }
    }
  };
  return (
    <>
      <h3>Login</h3>
      <form action='' onSubmit={loginHandler}>
        <div>
          <label htmlFor='username'></label>
          <input
            type='text'
            name='username'
            id='username'
            required
            ref={usernameRef}
          />
        </div>
        <div>
          <label htmlFor='password'></label>
          <input
            type='password'
            name='password'
            id='password'
            required
            ref={passwordRef}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <h5>{errorMessage}</h5>
    </>
  );
};

export default Login;
