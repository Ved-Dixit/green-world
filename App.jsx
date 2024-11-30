import React from 'react';
import logo from './assets/logo.png';
import backgroundImage from './assets/Unknown.jpeg'
import {useNavigate} from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '20px',
    },
    logo: {
      width: '120px',
      height: 'auto',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      flex: 1,
    },
    left: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#ff6600',
      color: 'white',
      padding: '15px 30px',
      border: 'none',
      fontSize: '1.2rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    },
    buttonHover: {
      transform: 'scale(1.05)',
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'right',
      fontSize: '1.5rem',
      padding: '20px',
      lineHeight: '1.8',
      backgroundColor: 'black',
    },
  };
  return (
    <>
      <div style={styles.container}>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </header>
      <div style={styles.content}>
        <div style={styles.left}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            onClick={() => navigate('/Shop')}
          >
            Start Shopping With Us
          </button>
        </div>
        <div style={styles.right}>
          <p>
            Welcome to our online store! Find the best deals and products curated
            just for you. Shop now and experience excellence in every purchase.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
