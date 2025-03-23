import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingContainer}>
      <header className={styles.landingHeader}>
        <h1>Welcome to SyncStream</h1>
        <p>
          Watch movies and series together with your friends and family, no matter the distance.
        </p>
      </header>
      <div className={styles.buttonGroup}>
        <button 
          className={styles.createRoomBtn} 
          onClick={() => navigate('/create')}
        >
          Create Room
        </button>
        <button 
          className={styles.joinRoomBtn} 
          onClick={() => navigate('/join')}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
