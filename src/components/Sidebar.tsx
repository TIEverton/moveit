import styles from '../styles/components/Sidebar.module.css';

import { FiAward, FiHome, FiLogOut } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <div className={styles.containerSidebar}>
      <img src="/logo.svg" alt="Move.it" />
      <div>
        <ul>
          <li><FiHome size={32} title="Home" /></li>
          <li><FiAward size={32} title="Leaderboard" /></li>
        </ul>
      </div>
      <FiLogOut size={24} title="Logout" />
    </div>
  )
}