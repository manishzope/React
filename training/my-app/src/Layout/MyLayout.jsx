import React from 'react';
import Main from './Main';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import mystyle from './mystyle.css';

const MyLayout = () => {
  return (
    <>
      <MyHeader />
      <Main />
      <MyFooter />
    </>
  );
};

export default MyLayout;
