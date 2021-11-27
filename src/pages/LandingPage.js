import React from 'react';
import Layout from '../components/Layout';

const LandingPage = ({ user, navigate }) => {
  return (
    <Layout>
      <div className='Page LandingPage'>
        <h1>Welcome!</h1>
        {/* <p>Welcome {user} to the technical test landing page!</p> */}
      </div>
    </Layout>
  );
};

export default LandingPage;
