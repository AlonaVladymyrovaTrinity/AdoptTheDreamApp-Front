import React from 'react';
import redCat from '../../images/redCat.mp4';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home_banner">
                <video src={redCat} autoPlay loop muted />

                <div className="home_banner_content"></div>
            </div>
        </>
    );
};

export default Home;
