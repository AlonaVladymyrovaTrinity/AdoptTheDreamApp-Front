import React from 'react';
import redCat from '../../images/redCat.mp4';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.home_banner}>
        <video src={redCat} autoPlay loop muted />

        <div className={style.home_banner_content}></div>
      </div>
    </>
  );
};

export default Home;
