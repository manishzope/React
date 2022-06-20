import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  nav('/login');

  return (
    <>
      <h3>This is Home section</h3>
    </>
  );
};

export default Home;
