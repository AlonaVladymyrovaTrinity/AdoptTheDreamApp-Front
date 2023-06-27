import React, { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { Link } from 'react-router-dom';
import FavoriteCheckbox from '../layout/FavoriteCheckbox/FavoriteCheckbox';
import AuthContext from '../../context/auth-context';

const PetCard = ({ pet, isFavorite, onToggleFavoriteState }) => {
  const { userId } = useContext(AuthContext);
  const [isFavoriteHidden, setIsFavoriteHidden] = useState(true)
  
  const handleToggle = () => {
    onToggleFavoriteState(pet._id);
  }
    
  useEffect(() => {
    const authenticated = userId ? true : false;
    if (authenticated) {
      setIsFavoriteHidden(false);
    }
  }, [userId])


  return (
    <div className="petCard_wrapper ps-1 pe-1">
      <div className="petCard">
        <Card
          className="border-0 bg-transparent rounded relative"
          style={{ width: '19rem' }}
        >
          <div className="link_and_checkbox">
            {!isFavoriteHidden && (
              <div className="position-absolute top-0 end-0 mt-1 me-1">
                <FavoriteCheckbox
                  isChecked={isFavorite}
                  onToggleCheckbox={handleToggle}
                />
              </div>
            )}
            <Link
              className="card-block stretched-link text-decoration-none"
              to={`/pet/${pet._id}`}
            >
              <Card.Img
                variant="top"
                style={{
                  width: '100%',
                  height: '19rem',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
                src={
                  pet.image.length === 0 && pet.petType === 'Cat'
                    ? cartoonCat
                    : pet.image.length === 0 && pet.petType === 'Dog'
                    ? cartoonDog
                    : pet.image[0].medium
                }
                alt={pet.petName}
              />
              <Card.Body style={{ color: 'var(--color-txt)' }}>
                <Card.Title>{pet.petName}</Card.Title>
                <Card.Text>
                  <span className="fw-bold">Gender:</span> {pet.gender} •{' '}
                  <span className="fw-bold">Age:</span> {pet.age} •{' '}
                  <span className="fw-bold">Color:</span> {pet.color} •{' '}
                  <span className="fw-bold">Breed:</span> {pet.breed}
                </Card.Text>
              </Card.Body>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PetCard;
