import React from 'react';
import Card from 'react-bootstrap/Card';
import whiteCat from '../../images/whiteCat.jpg';
import { Link } from 'react-router-dom';

const PetCard = () => {
  return (
    <div className="petCard">
      <Card
        className="border-1 shadow p-3 m-5 bg-body rounded"
        style={{ width: '20rem' }}
      >
        <Link
          className="card-block stretched-link text-decoration-none"
          to="/pet/cat`"
        >
          <Card.Img
            variant="top"
            style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
            src={whiteCat}
            alt="white cat"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default PetCard;
