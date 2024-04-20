import React from 'react';
import { FaUser } from 'react-icons/fa';

const styles = {
  profile: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    width: '64px',
    height: '64px',
    borderRadius: '100000px',
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
};

const Image = () => {
    return (
        
            <div style={styles.profile}>
                <FaUser size={32} color="#333" />
            </div>
        
    );
  };
  
  export default Image;