import React, { useState, useEffect, useContext } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import style from './FavoritePets.module.css';
import { useReducer, useMemo } from 'react';
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
import NoFavorites from '../NoFavorites/NoFavorites';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FavoritePets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(
    favoritePetsReducer,
    initialStateFavoritePets
  );
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
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Favorite Pets</h1>
      {!favorites || favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <Container
          style={{
            marginTop: '1rem',
            width: '100%',
            paddingInline: '3rem',
          }}
        >
          {/* -------------------------------------------------- */}
          <Row xs={1} md={2} lg={2} xl={3} className="ps-0 pe-0">
            {currentPets.map((pet) => (
              <Col className="mb-4 ps-0 pe-0">
                <FavoritePetCard pet={pet} onRemove={removeFavorite} />
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
