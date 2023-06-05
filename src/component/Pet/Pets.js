import React, { useState } from 'react';
// import redCat from '../../images/redCat.mp4';
import Loader from '../layout/Loader/Loader';
import PetCard from '../Home/PetCard';
// import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './Pets.module.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const Pets = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className={style.pets_container}>
        {/* <div className={style.home_banner}>
          <div className={style.overlay}></div>
          <video src={redCat} autoPlay loop muted />
          <div className={style.home_banner_content}>
            <h1>WELCOME TO ADOPT PET</h1>
            {/* <p>FIND YOUR FRIEND</p> */}
        {/* <div className={style.find_pet_button}>
              <NavigateButton
                linkName={'/pets'}
                children={'FIND YOUR FRIENDS'}
                size="btn-lg" */}
        {/* /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>  */}
        <span className={style.homePage_txt}>
          <h3>CHOOSE YOUR PET</h3>
        </span>
        {loading ? (
          <Loader />
        ) : (
          <div className={style.cardsContainerWithSelect}>
            <div className={style.selectBox}>
              <Nav style={{ width: '12rem' }} className="flex-column p-3">
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  // className={style['select-option']}
                  aria-label="Default select example"
                >
                  <option>Type</option>
                  <option value="1">Cat</option>
                  <option value="2">Dog</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Breed</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Age</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Good with</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Coat length</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Care & behavior</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Nav>
            </div>
            <div className={style.cardsContainer} fluid="md" id="container">
              <Row xs={1} md={2} lg={3} className="row-cols-auto g-col-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <Col className="mb-4" key={idx}>
                    <div className={style.grid_item}>
                      <PetCard />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pets;
