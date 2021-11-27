import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };
  return (
    <div className='Header'>
      <img src={Logo} alt='Site Logo' />
      <h1>Technical Test Results</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Header;
