import { useState } from 'react';

const LoginControlled = () => {
  const [userVals, setUserVals] = useState({ username: '', password: '' });
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Form Submitted', userVals)
    setUserVals({ username: '', password: '' })
  }

  return (
    <>
      <form action="" onSubmit={formSubmitHandler}>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={userVals.username || ""} onChange={(event) => setUserVals({ username: event.target.value, password: userVals.password })} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={userVals.password || ""} onChange={(event) => setUserVals({ username: userVals.username, password: event.target.value })} />
        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginControlled;
