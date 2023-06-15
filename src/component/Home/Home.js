import React, { useState } from 'react';
import redCat from '../../images/redCat.mp4';
import style from './Home.module.css';
import Loader from '../layout/Loader/Loader';
import PetCard from './PetCard';
import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Initial page is 1
  //loading simulation
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const totalItems = 20; // Replace with your total number of items
  const itemsPerPage = 18; // Replace with the number of items to display per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = Array.from({ length: totalItems }).slice(
    startIndex,
    endIndex
  );

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
                children={'FIND YOUR FRIEND'}
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
              {visibleItems.map((_, idx) => (
                <Col className="mb-4" key={idx}>
                  <div className={style.grid_item}>
                    <PetCard />
                  </div>
                </Col>
              ))}
            </Row>
            <Pagination className="mt-3 justify-content-center">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={style['custom-pagination-item']}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
