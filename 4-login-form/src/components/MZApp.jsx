import React from 'react';
import LoginControlled from './LoginControlled';
import LoginUncontrolled from './LoginUncontrolled';

const MZApp = () => {
  return (
    <>
      <h2>Login Form</h2>
      <React.StrictMode>
        {/* <LoginControlled /> */}
        <LoginUncontrolled />
      </React.StrictMode>
    </>
  );
};

export default MZApp;
