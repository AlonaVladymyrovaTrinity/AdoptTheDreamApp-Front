import React, { useState } from 'react';
import PetCard from '../Home/PetCard';

const FavoritePets = () => {
  const [favoritePets, setFavoritePets] = useState([]);

  // Function to remove a pet from favorites
  const removeFavorite = (petId) => {
    setFavoritePets(favoritePets.filter((pet) => pet.id !== petId));
  };

  return (
    <div>
      <h1>Favorite Pets</h1>
      {favoritePets.length === 0 ? (
        <p>No favorite pets selected.</p>
      ) : (
        <div>
          {favoritePets.map((pet) => (
            <PetCard key={pet.id} pet={pet} removeFavorite={removeFavorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePets;