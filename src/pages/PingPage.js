import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const PingPage = ({ user, navigate }) => {
  const [pingResponse, setPingResponse] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    let isMounted = true;
    async function pingAPI() {
      try {
        let response = await fetch('https://dev.structura.ai/api/devtest/ping');
        response = await response.json();
        setPingResponse(response);
      } catch (error) {
        setErrorMsg('Error from Ping API');
      }
    }
    if (isMounted) {
      pingAPI();
    }
    return function cleanup() {
      isMounted = false;
    };
  }, []);
  return (
    <Layout>
      <div className='Page PingPage'>
        <h1>Ping API</h1>
        {pingResponse && <p>{pingResponse}</p>}
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </Layout>
  );
};

export default PingPage;
