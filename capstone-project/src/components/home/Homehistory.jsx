import React from 'react';

const styles = {
  history: {
    position: 'relative',
    bottom: '-90px',
    left: '70px',
    width: '444px',
    height: '200px',
    backgroundColor: '#2d2d2d',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid black',
  },
  header:{
    padding: '5px',
    color: '#fff',
    fontSize: '20px',
    textAlign: 'left',
    margin: 7,
    borderBottom: '1px solid #fff',
  },
};

const history = (props) => {
  return (
    <a href='./MissionHistory'>
    <div style={styles.history}>
      {props.children}
      <div style={styles.header}>
        Mission History
      </div>
    </div>
    </a>
  );
};

export default history;