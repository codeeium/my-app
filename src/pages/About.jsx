// import React from 'react';
import homeImage from '../assets/jpg/about.jpg';

const About = () => {
    return (
        <div style={{textAlign: 'center', padding: '2rem'}}>

            <h1>Teach English Online</h1>
            <h1>Earn $14—$22 an hour from the comfort of home.</h1>
            <h1>Learn English Online</h1>
            <img src={homeImage} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>

        </div>
    );
};

export default About;
