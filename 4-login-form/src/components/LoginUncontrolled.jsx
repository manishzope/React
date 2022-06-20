import React, { useRef } from 'react';

function LoginUncontrolled() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(usernameInputRef.current.value + ' ' + passwordInputRef.current.value);
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInputRef}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordInputRef}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {/* <h5>User name: {usernameInputRef.current.value || 'empty'}</h5>
      <h5>User name: {passwordInputRef.current.value || 'empty'}</h5> */}
    </>
  );
}

export default LoginUncontrolled;
