import React, { useState } from 'react';
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

export default function Home() {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className={styles.container}>

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


    </div>
  )
}

