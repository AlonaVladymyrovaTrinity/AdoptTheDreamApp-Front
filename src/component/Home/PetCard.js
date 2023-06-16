import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { Link } from 'react-router-dom';
import FavoriteCheckbox from '../layout/FavoriteCheckbox/FavoriteCheckbox';

const PetCard = ({ pet }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="petCard_wrapper ps-1 pe-1">
      <div className="petCard">
        <Card
          className="border-0 bg-transparent rounded relative"
          style={{ width: '19rem' }}
        >
          <div className="link_and_checkbox">
            <div className="position-absolute top-0 end-0 mt-1 me-1">
              <FavoriteCheckbox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>

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
                  pet.image[0] === '/uploads/example.jpeg' &&
                  pet.petType === 'Cat'
                    ? cartoonCat
                    : pet.image[0] === '/uploads/example.jpeg' &&
                      pet.petType === 'Dog'
                    ? cartoonDog
                    : pet.image[0]
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
