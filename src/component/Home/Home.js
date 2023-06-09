import React, { useState } from 'react';
import redCat from '../../images/redCat.mp4';
import style from './Home.module.css';
import Loader from '../layout/Loader/Loader';
import PetCard from './PetCard';
import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  const [loading, setLoading] = useState(true);
  //loading simulation
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div /*className={style.home_container}*/>
        <div className={style.home_banner}>
          <div className={style.overlay}></div>
          <video src={redCat} autoPlay loop muted />
          <div className={style.home_banner_content}>
            <h1>WELCOME TO ADOPT PET</h1>
            <div className={style.find_pet_button}>
              <NavigateButton
                linkName={'/pets'}
                children={'FIND YOUR FRIENDS'}
                size="btn-lg"
              />
            </div>
          </div>
        </div>
        <span className={style.homePage_txt}>
          <h3>CHOOSE YOUR PET</h3>
        </span>
        {loading ? (
          <Loader className="small-spinner" />
        ) : (
          <div className={style.cardsContainer} fluid="md" id="container">
            <Row
              xs={1}
              md={2}
              lg={3}
              className="row-cols-auto g-col-4 ps-5 pe-5"
            >
              {Array.from({ length: 9 }).map((_, idx) => (
                <Col className="mb-4" key={idx}>
                  <div className={style.grid_item}>
                    <PetCard />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
