import React, { useState, useEffect, useContext } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import style from './FavoritePets.module.css';
import { useReducer, useMemo } from 'react';
import { initialStateFavoritePets, favoritePetsReducer } from '../../reducers/favoritePetsReducer';
import { getFavoritePets, removePetFromFavorites } from '../../actions/favoritePetsAction';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context'
import FavoritePetCard from './FavoritePetCard';

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
  const removeFavorite = async (petId) => {
    await removePetFromFavorites({ petId: petId }, dispatch)
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
          {currentPets.map((pet) => (
            <FavoritePetCard pet={pet} onRemove={removeFavorite} />
          ))}
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
