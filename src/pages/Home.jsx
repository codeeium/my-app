// import React from 'react';
import homeImage from '../assets/home.jpg';
import homeImage2 from '../assets/home2.jpg';
import eng2 from '../assets/eng 2.jpg';
import eng from '../assets/eng.png';
import engkids from '../assets/english-books-for-kids.png';
import engkids2 from '../assets/english-for-kids.png';
import gif1 from '../assets/1.gif';
import gif2 from '../assets/2.gif';


const Home = () => {
    return (
        <div style={{textAlign: 'center', padding: '2rem'}}>
                <h1>Teach English Online</h1>
                <h1>Earn $14—$22 an hour from the comfort of home.</h1>
                <h1>Learn English Online</h1>
                <img src={homeImage2} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={eng} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={eng2} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={engkids} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={gif1} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={gif2} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={engkids2} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
                <img src={homeImage} alt="Home" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <h1></h1>
        </div>
    );
};

export default Home;
