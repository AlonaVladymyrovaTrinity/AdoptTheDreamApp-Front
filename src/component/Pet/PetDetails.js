import React, { useState, useEffect, useReducer, useMemo, useContext } from 'react';
import { useParams } from 'react-router';
import { Carousel, Button } from 'react-bootstrap';
import Loader from '../layout/Loader/Loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import style from './PetDetails.module.css';
import { initialState, petReducer } from '../../reducers/petReducer';
import { getPet, addPetToFavoritesOnPetDetails, removePetFromFavoritesOnPetDetails, getSinglePetIsFavoriteStatus } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthContext from '../../context/auth-context'

const PetDetails = ({ pet }) => {
  const [index, setIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(petReducer, initialState);
  let { id } = useParams();
  const petDetails = useMemo(() => state.pet || null, [state.pet]);
  const isFavorite = useMemo(() => state.isFavorite || false, [state.isFavorite]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const authenticated = userId ? true : false;
    setIsAuthenticated(authenticated);
  }, [userId]);

  useEffect(() => {
    const fetchPetData = async () => {
      await getPet(id, setErrorMessage, dispatch);
      if (isAuthenticated) {
        await getSinglePetIsFavoriteStatus(id, dispatch);
      }
    };
    fetchPetData();
  }, [id, isAuthenticated]);

  const goodWith = useMemo(() => {
    if (!state.pet) return ""
    return Object.entries(state.pet.goodWith)
      .filter(([_, value]) => (value))
      .map(([key, _]) => key).join(", ")
  }, [state.pet]);

  const careAndBehaviour = useMemo(() => {
    if (!state.pet) return ""
    return Object.entries(state.pet.careAndBehaviour)
      .filter(([_, value]) => (value))
      .map(([key, _]) => key.replace(/_/g, ''))
      .join(", ")
  }, [state.pet]);

  const toggleAddToFavorites = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      if (!isFavorite) {
        addPetToFavoritesOnPetDetails(petDetails._id, dispatch)
      } else {
        removePetFromFavoritesOnPetDetails(petDetails._id, dispatch)
      }
    }
  };

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
                style={{ marginTop: '2rem', paddingLeft: '1rem', paddingRight: '1rem' }}
              >

                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  hover='pause'
                  style={{ overflow: "hidden" }}
                >
                  {petDetails.image.length > 0 ? (
                    petDetails.image.map(it => it.full).map((img, i) =>
                      <Carousel.Item
                        key={i}
                      >
                        <img src={img}
                          alt={petDetails.petName}
                          style={{ height: "35 rem" }}
                        />
                      </Carousel.Item>
                    )
                  ) : (
                    <Carousel.Item
                      key={0}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={
                          petDetails.petType === 'Cat'
                            ? cartoonCat
                            : cartoonDog
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
                style={{ marginRight: 'auto', marginTop: '2rem', paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <div
                  className={style['frame']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <h1 className={'sr-only'}>Animal Details</h1>
                  <p>Name: {petDetails.petName === '' || petDetails.petName === null ? 'no information' : petDetails.petName}</p>
                  <p>ID: {petDetails._id === '' || petDetails._id === null ? 'no information' : petDetails._id}</p>
                  <p>Breed: {petDetails.breed === '' || petDetails.breed === null ? 'no information' : petDetails.breed}</p>
                  <p>Type: {petDetails.petType === '' || petDetails.petType === null ? 'no information' : petDetails.petType}</p>
                  <p>Age: {petDetails.age === '' || petDetails.age === null ? 'no information' : petDetails.age}</p>
                  <p>Size: {petDetails.size === '' || petDetails.size === null ? 'no information' : petDetails.size}</p>
                  <p>Gender: {petDetails.gender === '' || petDetails.gender === null ? 'no information' : petDetails.gender}</p>
                  <p>Good with: {goodWith === '' || goodWith === null ? 'no information' : goodWith}</p>
                  <p>Coat Length: {petDetails.coatLength === '' || petDetails.coatLength === null ? 'no information' : petDetails.coatLength}</p>
                  <p>Color: {petDetails.color === '' || petDetails.color === null ? 'no information' : petDetails.color}</p>
                  <p>
                    Care & Behavior: {careAndBehaviour}
                  </p>
                  <p>Description: {petDetails.description}</p>
                  <div className={style.buttonContainer}>
                    <Button
                      className={
                        isFavorite
                          ? `${style.favoriteButton} ${style.favorite}`
                          : style.favoriteButton
                      }
                      onClick={toggleAddToFavorites}
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
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default PetDetails;
