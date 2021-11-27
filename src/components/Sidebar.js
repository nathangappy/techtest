import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../assets/images/home.png';
import PlanetLogo from '../assets/images/planet-earth.png';
import PingLogo from '../assets/images/network.png';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Link to='/'>
        <button>
          <img src={HomeLogo} alt='Home Logo' />
        </button>
      </Link>
      <Link to='/ping'>
        <button>
          <img src={PingLogo} alt='Ping Logo' />
        </button>
      </Link>
      <Link to='/countries'>
        <button>
          <img src={PlanetLogo} alt='Planet Logo' />
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
