import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { user } = useContext(AuthContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}