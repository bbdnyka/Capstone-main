import React from 'react';

const styles = {
  start: {
    position: 'relative',
    top: '-315px',
    left: '530px',
    width: '200px',
    height: '170px',
    backgroundColor: '#b86a17',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid black',
    
    
    
  },
  header: {
    padding: 0,
    color: '#fff',
    fontSize: '17px',
    textAlign: 'center',
    margin: 31,
  },
};

const start = () => {
  return (
    <a href='./missionplanner'>
    <div style={styles.start}>
      <div style={styles.header}>
        <h2> Create New Mission</h2>
      </div>
    </div>
    </a>
  );
};

export default start;
