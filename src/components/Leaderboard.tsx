import React, { useEffect, useState } from 'react';
import api from '../services/api';

import styles from '../styles/components/Leaderboard.module.css';

interface DataProps {
  id: string,
  name: string,
  avatar_url: string,
  level: string,
  currentExperience: string,
  challengesCompleted: string,
}

export default function Leaderboard() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const res = api.get('/users').then(response => {
      const order = response.data.sort(function (a, b) {
        return a.level > b.level || a.currentExperience > b.currentExperience ? -1 : '';
      })
      setData(order)
    })


  }, [])

  return (
    <div className={styles.containerLeaderboard}>
      <div className={styles.contentLeader}>
        <h1>Leaderboard</h1>
        <table className={styles.tableLeader}>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>USUÁRIO</th>
              <th>DESAFIOS</th>
              <th>EXPERIÊNCIAS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <>
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className={styles.user}>
                      <img src={user.avatar_url} alt={user.name} />
                      <div>
                        <strong>{user.name}</strong>
                        <div className={styles.level}>
                          <img src="icons/level.svg" alt="" />
                          <p>Level {user.level}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td><strong>{user.challengesCompleted}</strong> completados</td>
                  <td><strong>{user.currentExperience}</strong> xp</td>
                </tr>
                <div className={styles.separator} />
              </>
            ))}
          </tbody>
        </table>


      </div>
    </div >
  )
}