import { GetServerSideProps } from 'next';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../contexts/AuthContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function MyApp({ Component, pageProps }, props: HomeProps) {
  return (

    <AuthProvider>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
        position="top-right"
      />
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Component {...pageProps} />
      </ChallengesProvider>
    </AuthProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
