import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <div className='Layout'>
        <Header />
        <Sidebar />
        <main className='Layout__main'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
