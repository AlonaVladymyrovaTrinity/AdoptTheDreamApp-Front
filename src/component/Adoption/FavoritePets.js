import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import style from './FavoritePets.module.css';
import { useReducer, useMemo } from 'react';
import { initialStateFavoritePets, favoritePetsReducer } from '../../reducers/petReducer';
import { useEffect } from 'react';
import { getFavoritePets } from '../../actions/petAction';
import FavoritePetCard from './FavoritePetCard';

const FavoritePets = () => {
  // const [favoritePets, setFavoritePets] = useState(pets);
  const [currentPage, setCurrentPage] = useState(1);

  const [state, dispatch] = useReducer(favoritePetsReducer, initialStateFavoritePets);

  useEffect(() => {
    const fetchFavoritePets = async () => {
      await getFavoritePets(dispatch);
      console.log('Favorite Pets loaded');
    };
    fetchFavoritePets();
  }, [])


  // Function to remove a pet from favorites
  const removeFavorite = (petId) => {
    // setFavoritePets(favoritePets.filter((pet) => pet.id !== petId));
  };

  // Function to handle adopting a pet
  const handleAdopt = (petId) => {
    console.log(`Adopt pet with ID: ${petId}`);
  };

  // Pagination logic
  const petsPerPage = 3;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const favoritePets = useMemo(() => Object.values(state.favoritePets || {}), [state.favoritePets]);
  const currentPets = favoritePets.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Favorite Pets</h1>
      {favoritePets.length === 0 ? (
        <p>No favorite pets selected.</p>
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
              <Col xs={12} sm={6} md={4} key={pet.id}>
                <FavoritePetCard pet={pet} />
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
            { length: Math.ceil(favoritePets.length / petsPerPage) },
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
