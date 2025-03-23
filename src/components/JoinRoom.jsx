import React, { useState } from 'react';
import styles from '../styles/JoinRoom.module.css';

const JoinRoom = () => {
  const [roomLink, setRoomLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomLink.trim() === '') {
      setErrorMessage('Please enter a valid room link.');
      return;
    }
    // Simulate joining a room by redirecting
    window.location.href = roomLink;
  };

  return (
    <div className={styles.container}>
      <h2>Join Room</h2>
      <form onSubmit={handleJoinRoom} className={styles.form}>
        <input 
          type="text"
          placeholder="Enter room link"
          value={roomLink}
          onChange={(e) => {
            setRoomLink(e.target.value);
            setErrorMessage('');
          }}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Join</button>
      </form>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default JoinRoom;
