import Head from 'next/head';
import Router from 'next/router';

import styles from '../styles/pages/Login.module.css'
import { useState } from 'react';

export default function Index() {
  const [user, setUser] = useState('');
  function handleSubmit() {
    console.log(user)
    //Router.push('/home')
  }

  return (
    <>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.containerLogin}>

        <div className={styles.containerLoginLeft}>
        </div>

        <div className={styles.containerLoginRight}>
          <img src="/logo-full-white.svg" alt="Move.it" />
          <strong>Bem-vindo</strong>

          <div className={styles.github}>
            <img src="/github-logo.svg" alt="GitHub" />
            <p> Faça login com seu Github para começar</p>
          </div>

          <div className={styles.formGithub}>
            <input
              placeholder="Digite seu username"
              type="text"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            <button type="button" onClick={handleSubmit}>
              <img src="/icon-arrow.svg" alt="Icon Arrow" />
            </button>
          </div>

        </div>
      </div>
    </>
  )
}


