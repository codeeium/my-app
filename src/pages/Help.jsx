// import React from 'react';
import homeImage from '../assets/home.jpg';

const Help = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <img src={homeImage} alt="Home" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our website, styled with beautiful colors.</p>
        </div>
    );
};

export default Help;
