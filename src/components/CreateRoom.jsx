import React, { useState } from 'react';
import styles from '../styles/CreateRoom.module.css';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [roomLink, setRoomLink] = useState('');

  const handleCreateRoom = (e) => {
    e.preventDefault();
    // Simulate generating a room link based on the room name
    const generatedLink = `${window.location.origin}/room/${roomName.toLowerCase().replace(/\s+/g, '-')}`;
    setRoomLink(generatedLink);
  };

  return (
    <div className={styles.container}>
      <h2>Create Room</h2>
      <form onSubmit={handleCreateRoom} className={styles.form}>
        <input 
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Generate Link</button>
      </form>
      {roomLink && (
        <div className={styles.linkContainer}>
          <p>Your room link:</p>
          <a href={roomLink} className={styles.link}>{roomLink}</a>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
