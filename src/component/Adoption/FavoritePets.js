import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Pagination } from 'react-bootstrap';
import style from './FavoritePets.module.css';

const pets = [
  {
    id: 135,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 2,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 127,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 7,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 135,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 2,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 127,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 7,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 135,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 2,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 127,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 7,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 135,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 2,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },
  {
    id: 127,
    image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
    name: 'Whiskers',
    description:
      'A lovely and playful cat with its endearing characteristics, brings joy and liveliness to any home. Its charming personality shines through its affectionate nature, as it eagerly seeks out cuddles and gentle strokes from its human companions.',
  },
  {
    id: 7,
    image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
    name: 'Mustafa',
    description:
      'Meet Mustafa, a charming and lovable feline companion who will steal your heart with his irresistible personality. Mustafa is the epitome of cuddliness and affection, always ready to shower you with warmth and love. With his soft fur and expressive eyes.',
  },  
];

const FavoritePets = () => {
  const [favoritePets, setFavoritePets] = useState(pets);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to remove a pet from favorites
  const removeFavorite = (petId) => {
    setFavoritePets(favoritePets.filter((pet) => pet.id !== petId));
  };

  // Function to handle adopting a pet
  const handleAdopt = (petId) => {
    console.log(`Adopt pet with ID: ${petId}`);
  };

  // Pagination logic
  const petsPerPage = 3;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
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
                <Card className={style['favorite-card']}>
                  <Card.Img variant="top" src={pet.image} alt={pet.name} />
                  <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>{pet.description}</Card.Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '10px',
                      }}
                    >
                      <Button
                        variant="danger"
                        onClick={() => handleAdopt(pet.id)}
                        className={style['button-favorite']}
                        style={{ marginRight: '10px' }}
                      >
                        Adopt
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeFavorite(pet.id)}
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
