import React, { useState, useEffect, useReducer, useMemo } from 'react';
import redCat from '../../images/redCat.mp4';
import style from './Home.module.css';
import Loader from '../layout/Loader/Loader';
import PetCard from './PetCard';
import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import { initialState, petsReducer } from '../../reducers/petReducer';
import { getAllPets } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initial page is 1
  const [errorMessage, setErrorMessage] = useState('');

  const [state, dispatch] = useReducer(petsReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllPets(dispatch);
      } catch (error) {
        setErrorMessage('');
        setErrorMessage('Error loading pets');
      }
    };
    fetchData();
  }, []);
  const pets = useMemo(() => state.pets || {}, [state.pets]);

  const totalItems = Object.values(pets).length; // Replace with your total number of items
  const itemsPerPage = 18; // Replace with the number of items to display per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = Object.values(pets).slice(startIndex, endIndex);

  return (
    <>
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}
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
        {state.loading ? (
          <Loader className="small-spinner" />
        ) : (
          <div className={style.cardsContainer} fluid="md" id="container">
            <Row
              xs={1}
              md={2}
              lg={3}
              className="row-cols-auto g-col-4 ps-5 pe-5"
            >
              {visibleItems.map((pet, idx) => (
                <Col className="mb-4" key={idx}>
                  <div className={style.grid_item}>
                    <PetCard pet={pet} />
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
