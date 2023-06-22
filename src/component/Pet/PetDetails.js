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
import { loadPet, addPetToFavorites, removePetFromFavorites, getPetIsFavoriteStatus } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
// import { useSelector, useDispatch } from 'react-redux';

const PetDetails = ({ pet }) => {
  const [isFavorite, setIsFavorite] = useReducer(petReducer, initialState);
  const [index, setIndex] = useState(0);
  // const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(petReducer, initialState);
  let { id } = useParams();
  const petDetails = useMemo(() => state.pet || null, [state.pet]);


  useEffect(() => {
    const fetchPetData = async () => {
      await loadPet(id, setErrorMessage, dispatch);
      await getPetIsFavoriteStatus(id, dispatch);
    };
    fetchPetData();
  }, [id]);

  const toggleFavorite = () => {
    if (!isFavorite) {
      addPetToFavorites(id, dispatch)
    } else {
      removePetFromFavorites(id, dispatch)
    }
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
                className="d-flex align-items-center justify-content-center"
                style={{ marginRight: 'auto', marginTop: '2rem' }}
              >
                {petDetails.image && petDetails.image.length > 0 ? (
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={null}
                    style={{ width: '100%', height: '100%' }}
                  >
                    {petDetails.image.map((img, i) => {
                      return (
                        <Carousel.Item
                          key={i}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <img
                            src={
                              img === '/uploads/example.jpeg' &&
                              petDetails.petType === 'Cat'
                                ? cartoonCat
                                : img === '/uploads/example.jpeg' &&
                                  petDetails.petType === 'Dog'
                                ? cartoonDog
                                : img
                            }
                            alt="Animal 1"
                            style={{
                              width: '90%',
                              height: '90%',
                              objectFit: 'stretch',
                            }}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                ) : (
                  <div style={{ maxWidth: '100%', margin: '4rem' }}>
                    NO PET PICTURE
                  </div>
                )}
              </Col>
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
                style={{ marginRight: 'auto', marginTop: '2rem' }}
              >
                <div
                  className={style['frame']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <h1 className={'sr-only'}>Animal Details</h1>
                  <p>Name: {petDetails.petName}</p>
                  <p>ID: {petDetails._id}</p>
                  <p>Breed: {petDetails.breed}</p>
                  <p>Type: {petDetails.petType}</p>
                  <p>Age: {petDetails.age}</p>
                  <p>Size: {petDetails.size}</p>
                  <p>Gender: {petDetails.gender}</p>
                  <p>Good with: {petDetails.goodWith.join(', ')}</p>
                  <p>Coat Length: {petDetails.coatLength}</p>
                  <p>Color: {petDetails.color}</p>
                  <p>
                    Care & Behavior: {petDetails.careAndBehaviour.join(', ')}
                  </p>
                  <p>{petDetails.description}</p>
                  <Button
                    className={
                      isFavorite
                        ? `${style.favoriteButton} ${style.favorite}`
                        : style.favoriteButton
                    }
                    onClick={toggleFavorite}
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
