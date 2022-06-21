import React from 'react';
import { useNavigate } from 'react-router-dom';
import useIsAuthenticated from '../customHooks/useIsAuthenticated';

const About = () => {
  // const [isAuthenticated] = useIsAuthenticated();
  // const navigate = useNavigate();
  // if (!isAuthenticated) {
  //   navigate('/login');
  // }
  return (
    <>
      <h3>This is About section</h3>
    </>
  );
};

export default About;
