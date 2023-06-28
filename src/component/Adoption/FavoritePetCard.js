import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import { Link } from 'react-router-dom';
import FavoriteCheckbox from '../layout/FavoriteCheckbox/FavoriteCheckbox';
import { Button } from 'react-bootstrap';
import style from './FavoritePetCard.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const FavoritePetCard = ({ pet }) => {
  const [isChecked, setIsChecked] = useState(false);


  // Function to remove a pet from favorites
  const removeFavorite = (petId) => {
    // setFavoritePets(favoritePets.filter((pet) => pet.id !== petId));
  };

  const navigate = useNavigate();

  // Function to handle adopting a pet
  const handleAdopt = () => {
    Cookies.set('PetID', pet._id);
    Cookies.set('PetType', pet.petType);
    Cookies.set('PetName', pet.petName);
    navigate('/application/confirm');
  };

  return (
    <Card className={style['favorite-card']}>
      <Card.Img variant="top"
        src={
          pet.image.length > 0 ? pet.image[0].full : pet.petType === 'Cat' ? cartoonCat : cartoonDog
        } alt={pet.name} />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text className="text-truncate">
          {pet.description}
        </Card.Text>
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
  );
};

export default FavoritePetCard;
