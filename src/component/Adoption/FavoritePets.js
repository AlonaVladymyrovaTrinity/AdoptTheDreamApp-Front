import React, { useState, useEffect, useContext } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import style from './FavoritePets.module.css';
import { useReducer, useMemo } from 'react';
import { initialStateFavoritePets, favoritePetsReducer } from '../../reducers/favoritePetsReducer';
import { getFavoritePets, removePetFromFavorites, resetError } from '../../actions/favoritePetsAction';
import {
  initialStateFavoritePets,
  favoritePetsReducer,
} from '../../reducers/favoritePetsReducer';
import {
  getFavoritePets,
  removePetFromFavorites,
} from '../../actions/favoritePetsAction';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import FavoritePetCard from './FavoritePetCard';
import NoFavorites from '../NoFavorites/NoFavorites'
import Loader from '../layout/Loader/Loader';
import Alert from 'react-bootstrap/Alert';

const FavoritePets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(
    favoritePetsReducer,
    initialStateFavoritePets
  );
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const loading = useMemo(() => state.loading, [state.loading]);
  console.log('loading: ' + loading);
  const errorMessage = useMemo(() => state.error, [state.error]);
  const [gotFavorites, setGotFavorites] = useState(false);
  
  // Pagination logic
  const petsPerPage = 3;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const favorites = useMemo(() => Object.values(state.favorites || {}), [state.favorites]);
  const currentFavoritesPage = favorites.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const authenticated = userId ? true : false;
    if (!authenticated) {
      navigate('/login');
    }
  }, [userId, navigate]);

  useEffect(() => {
    const fetchFavoritePets = async () => {
      await getFavoritePets(dispatch);
      setGotFavorites(true)
    };
    fetchFavoritePets();
  }, []);

  // Function to remove a pet from favorites
  const removeFavorite = async (petId) => {
    await removePetFromFavorites({ petId: petId }, dispatch);
  };

  // Pagination logic
  const petsPerPage = 6;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const favorites = useMemo(
    () => Object.values(state.favorites || {}),
    [state.favorites]
  );
  const currentPets = favorites.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Favorite Pets</h1>
      {errorMessage && (
          <Alert
            variant="danger"
            onClose={() => resetErrorMessage(dispatch)}
            dismissible
          >
            {errorMessage}
          </Alert>
      )}

      {loading ? (
        <Loader className="small-spinner" />
      ) : (
        gotFavorites && favorites.length === 0 ? (
          <NoFavorites />
        ) : (
          <>
            <Container
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {currentFavoritesPage.map((pet) => (
                <FavoritePetCard pet={pet} onRemove={removeFavorite} />
              ))}
            </Container>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
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
          </>
        )
      )
      }
    </>
  );
}

export default FavoritePets;
