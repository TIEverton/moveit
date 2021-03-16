import { GetServerSideProps } from 'next';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../contexts/AuthContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';


export default function MyApp({ Component, pageProps }) {
  return (

    <AuthProvider>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
        position="top-right"
      />

      <Component {...pageProps} />
    </AuthProvider>
  )
}


