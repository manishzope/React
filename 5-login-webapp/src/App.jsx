import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
