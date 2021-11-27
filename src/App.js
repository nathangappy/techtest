import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CountriesPage from './pages/CountriesPage';
import PingPage from './pages/PingPage';

const App = () => {
  // Get user if logged in
  const [user] = useState(localStorage.getItem('user'));
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  // Redirect user to login page if user isn't logged in
  useEffect(() => {
    let isMounted = true;
    if (!user && isMounted && pathname !== '/login') {
      console.log('redirected ');
      navigate('/login', { replace: true });
    }
    return function cleanup() {
      isMounted = false;
    };
  }, [user, navigate, pathname]);

  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/ping' element={<PingPage />} />
      <Route path='/countries' element={<CountriesPage />} />
    </Routes>
  );
};

export default App;
