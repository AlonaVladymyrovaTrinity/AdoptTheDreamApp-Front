import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import style from './FavoritePets.module.css';
import { useReducer, useMemo } from 'react';
import { initialStateFavoritePets, favoritePetsReducer } from '../../reducers/favoritePetsReducer';
import { getFavoritePets, removePetFromFavorites } from '../../actions/favoritePetsAction';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthContext from '../../context/auth-context'
import NoFavorites from '../NoFavorites/NoFavorites'

const FavoritePets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(favoritePetsReducer, initialStateFavoritePets);
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const authenticated = userId ? true : false;
    if (!authenticated) {
      navigate('/login');
    }
  }, [userId, navigate]);

  useEffect(() => {
    const fetchFavoritePets = async () => {
      await getFavoritePets(dispatch);
    };
    fetchFavoritePets();
  }, [])

  // Function to remove a pet from favorites
  const removeFavorite = async (pet) => {
    await removePetFromFavorites({ petId: pet._id }, dispatch)
  };

  // Function to handle adopting a pet
  const handleAdopt = (pet) => {
    console.log(`Adopt pet with ID: ${pet._id}`);
    Cookies.set('PetID', pet._id);
    Cookies.set('PetType', pet.petType);
    Cookies.set('PetName', pet.petName);
    navigate('/application/confirm');
  };

  // Pagination logic
  const petsPerPage = 3;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const favorites = useMemo(() => Object.values(state.favorites || {}), [state.favorites]);
  const currentPets = favorites.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Favorite Pets</h1>
      {!favorites || favorites.length === 0 ? (
        <NoFavorites  />
      ) : (
        <Container
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row>
            {currentPets.map((pet) => (
              <Col xs={12} sm={6} md={4} key={pet._id}>
                <Card className={style['favorite-card']} style={{ height: '100%' }}>
                  <Card.Img variant="top" src={
                    pet.image.length > 0 ? pet.image[0].full :
                      pet.petType === 'Cat' ? cartoonCat : cartoonDog
                  }
                    alt={pet.name} />
                  <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text className='text-truncate'>{pet.description}</Card.Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '10px',
                      }}
                    >
                      <Button
                        variant="danger"
                        onClick={() => handleAdopt(pet)}
                        className={style['button-favorite']}
                        style={{ marginRight: '10px' }}
                      >
                        Adopt
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeFavorite(pet)}
                        className={style['button-favorite-remove']}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <div
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <Pagination>
          {Array.from(
            { length: Math.ceil(favorites.length / petsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
                className={style['custom-pagination-item']}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default FavoritePets;
