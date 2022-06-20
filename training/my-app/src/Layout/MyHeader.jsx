import React, { useState } from 'react';
import MyTitle from './MyTitle';

const MyHeader = () => {
  const [title, setTitle] = useState('Welcome to ReactJS from HEADER!!!');

  // const modify = (newTitle) => {
  //   setTitle(newTitle);
  // }

  return (
    <div className='header'>
      HEADER state - {title}
      <br />
      <MyTitle title={title} changeTitle={setTitle} />
    </div>
  );
};

export default MyHeader;
