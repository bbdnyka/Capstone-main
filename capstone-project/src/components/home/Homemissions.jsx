import React from 'react';

const styles = {
  card: {
    position: 'relative',
    top: '60px',
    left: '70px',
    width: '444px',
    height: '170px',
    backgroundColor: '#2d2d2d',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid black',
  },
  header: {
    padding: '5px',
    color: '#fff',
    fontSize: '20px',
    textAlign: 'left',
    margin: 5,
    borderBottom: '1px solid #fff'
  },
};

const Card = () => {
  return (
    <a href='./MissionPlanner'>
    <div style={styles.card}>
      <div style={styles.header}>
        Current Missions
      </div>

    </div>
    </a>
  );
};

export default Card;


