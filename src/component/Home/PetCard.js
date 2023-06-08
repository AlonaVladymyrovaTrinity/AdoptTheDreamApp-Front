import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import whiteCat from '../../images/whiteCat.jpg';
import contactPage from '../../images/contactPage.jpg';
import { Link } from 'react-router-dom';
import FavoriteCheckbox from '../layout/FavoriteCheckbox/FavoriteCheckbox';

const PetCard = () => {
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
              to="/pet/cat`"
            >
              <Card.Img
                variant="top"
                style={{
                  width: '100%',
                  height: '19rem',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
                src={contactPage}
                // src={whiteCat}
                // alt="white cat"
              />
              <Card.Body style={{ color: 'var(--color-txt)' }}>
                <Card.Title>Name</Card.Title>
                <Card.Text>Gender Age Color Breed</Card.Text>
              </Card.Body>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PetCard;
