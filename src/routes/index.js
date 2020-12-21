import React from 'react';
// import {AuthProvider} from './authprovider';
import {AuthProvider} from './authprovider';
import Routes from './routes';

const Providers = () => {
  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    // <Routes />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
