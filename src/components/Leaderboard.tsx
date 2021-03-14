import React from 'react';

import styles from '../styles/components/Leaderboard.module.css';

export default function Leaderboard() {
  return (
    <div className={styles.containerLeaderboard}>
      <div className={styles.contentLeader}>
        <h1>Leaderboard</h1>
        <table className={styles.tableLeader} cellspacing="0">
          <tr>
            <th>POSIÇÃO</th>
            <th>USUÁRIO</th>
            <th>DESAFIOS</th>
            <th>EXPERIÊNCIAS</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className={styles.user}>
                <img src="https://avatars.githubusercontent.com/u/44790240?v=4" alt="" />
                <div>
                  <strong>Everton Pinheiro</strong>
                  <div className={styles.level}>
                    <img src="icons/level.svg" alt="" />
                    <p>Level 36</p>
                  </div>
                </div>
              </div>
            </td>
            <td><strong>123</strong> completados</td>
            <td><strong>12121</strong> xp</td>
          </tr>
          <div className={styles.separator} />
          <tr>
            <td>1</td>
            <td>
              <div className={styles.user}>
                <img src="https://avatars.githubusercontent.com/u/44790240?v=4" alt="" />
                <div>
                  <strong>Everton Pinheiro</strong>
                  <div className={styles.level}>
                    <img src="icons/level.svg" alt="" />
                    <p>Level 36</p>
                  </div>
                </div>
              </div>
            </td>
            <td><strong>123</strong> completados</td>
            <td><strong>12121</strong> xp</td>
          </tr>
          <div className={styles.separator} />
          <tr>
            <td>1</td>
            <td>
              <div className={styles.user}>
                <img src="https://avatars.githubusercontent.com/u/44790240?v=4" alt="" />
                <div>
                  <strong>Everton Pinheiro</strong>
                  <div className={styles.level}>
                    <img src="icons/level.svg" alt="" />
                    <p>Level 36</p>
                  </div>
                </div>
              </div>
            </td>
            <td><strong>123</strong> completados</td>
            <td><strong>12121</strong> xp</td>
          </tr>
          <div className={styles.separator} />
          <tr>
            <td>1</td>
            <td>
              <div className={styles.user}>
                <img src="https://avatars.githubusercontent.com/u/44790240?v=4" alt="" />
                <div>
                  <strong>Everton Pinheiro</strong>
                  <div className={styles.level}>
                    <img src="icons/level.svg" alt="" />
                    <p>Level 36</p>
                  </div>
                </div>
              </div>
            </td>
            <td><strong>123</strong> completados</td>
            <td><strong>12121</strong> xp</td>
          </tr>
        </table>


      </div>
    </div >
  )
}