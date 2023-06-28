import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { useParams } from 'react-router';
import { Carousel, Button } from 'react-bootstrap';
import Loader from '../layout/Loader/Loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import style from './PetDetails.module.css';
import { initialState, petReducer } from '../../reducers/petReducer';
import { loadPet } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { useNavigate } from 'react-router-dom';
import StyledBackButton from '../layout/BackButton/StyledBackButton';
import Cookies from 'js-cookie';

const PetDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [index, setIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(petReducer, initialState);
  let { id } = useParams();
  const petDetails = useMemo(() => state.pet || null, [state.pet]);

  const goodWith = useMemo(() => {
    if (!state.pet) return '';
    return Object.entries(state.pet.goodWith)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
      .join(', ');
  }, [state.pet]);

  const careAndBehaviour = useMemo(() => {
    if (!state.pet) return '';
    return Object.entries(state.pet.careAndBehaviour)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
      .join(', ');
  }, [state.pet]);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        await loadPet(id, setErrorMessage, dispatch);
      } catch (error) {
        dispatch({ type: 'LOAD_PET_FAILURE' });
        setErrorMessage(`An error occurred during loading pet with id ${id}`);
      }
    };
    fetchPetData();
  }, [id]);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
  };

  const navigate = useNavigate();

  const handleAdopt = () => {
    Cookies.set('PetID', petDetails._id);
    Cookies.set('PetType', petDetails.petType);
    Cookies.set('PetName', petDetails.petName);
    navigate('/application/confirm');
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {state.loading ? (
        <Loader className="small-spinner" />
      ) : (
        <>
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage('')}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          {petDetails && (
            <Row className="g-0">
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-start justify-content-center"
                style={{
                  marginTop: '2rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  hover="pause"
                  style={{ overflow: 'hidden' }}
                >
                  {petDetails.image.length > 0 ? (
                    petDetails.image
                      .map((it) => it.full)
                      .map((img, i) => (
                        <Carousel.Item key={i}>
                          <img
                            src={img}
                            alt={petDetails.petName}
                            style={{ height: '35rem' }}
                          />
                        </Carousel.Item>
                      ))
                  ) : (
                    <Carousel.Item
                      key={0}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={
                          petDetails.petType === 'Cat' ? cartoonCat : cartoonDog
                        }
                        alt={petDetails.petName}
                        style={{
                          width: '90%',
                          height: '90%',
                          objectFit: 'stretch',
                        }}
                      />
                    </Carousel.Item>
                  )}
                </Carousel>
              </Col>
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
                style={{
                  marginRight: 'auto',
                  marginTop: '2rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <div
                  className={style['frame-border']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <div className={style['back-button']}>
                    <StyledBackButton
                      linkName={'/pets'}
                      className={'link-color'}
                      style={{ marginBottom: '1rem' }}
                      children
                    >
                      <span>Go to Pets page</span>
                    </StyledBackButton>
                  </div>
                  <div className={style['frame-body']}>
                    <h1 className={'sr-only'}>Animal Details</h1>
                    <p>Name: {petDetails.petName}</p>
                    <p>ID: {petDetails._id}</p>
                    <p>Breed: {petDetails.breed}</p>
                    <p>Type: {petDetails.petType}</p>
                    <p>Age: {petDetails.age}</p>
                    <p>Size: {petDetails.size}</p>
                    <p>Gender: {petDetails.gender}</p>
                    <p>Good with: {goodWith}</p>
                    <p>Coat Length: {petDetails.coatLength}</p>
                    <p>Color: {petDetails.color}</p>
                    <p>Care & Behavior: {careAndBehaviour}</p>
                    <p>Description: {petDetails.description}</p>
                    <div className={style.buttonContainer}>
                      <Button
                        className={
                          isFavorite
                            ? `${style.favoriteButton} ${style.favorite}`
                            : style.favoriteButton
                        }
                        onClick={handleAddToFavorites}
                      >
                        {isFavorite ? (
                          <>
                            <FontAwesomeIcon icon={faHeart} className="me-2" />
                            Added to Favorites
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faHeart} className="me-2" />
                            Add to Favorites
                          </>
                        )}
                      </Button>

                      <div className={style.buttonSpacing}>
                        <Button
                          onClick={handleAdopt}
                          className={style.adoptButton}
                          variant="btn-primary"
                          size="btn-lg"
                        >
                          <span>
                            <FontAwesomeIcon icon={faHeart} /> Adopt
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default PetDetails;
