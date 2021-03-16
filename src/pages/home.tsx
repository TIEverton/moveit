import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import Leaderboard from '../components/Leaderboard';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import api from '../services/api';
import Cookies from 'js-cookie';

interface DataProps {
  id: string,
  name: string,
  avatar_url: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  user: string;

}

export default function Home(props: DataProps) {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className={styles.container}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        user={props.user}
      >
        <Head>
          {isClicked ? <title>Home | move.it</title> : <title>Leaderboard | move.it</title>}
        </Head>

        <div className={styles.containerSidebar}>

          <img src="/logo.svg" alt="Move.it" />
          <div>
            <ul>
              <li className={isClicked ? styles.clicked : ''} onClick={() => setIsClicked(true)}><FiHome size={32} title="Home" /></li>
              <li className={isClicked ? '' : styles.clicked} onClick={() => setIsClicked(false)}><FiAward size={32} title="Leaderboard" /></li>
            </ul>
          </div>
          <FiLogOut size={24} title="Logout" />
        </div>


        {isClicked ? (

          <div className={styles.content}>
            <ExperienceBar />

            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>

          </div>
        ) : (
          <Leaderboard />
        )}

      </ChallengesProvider>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengesCompleted, user } = ctx.req.cookies;

  return {
    props: {
      user: String(user),
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}