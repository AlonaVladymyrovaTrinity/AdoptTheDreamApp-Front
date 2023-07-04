import { Card, Button } from 'react-bootstrap';
import cartoonCat from '../../images/cartoonCat.jpg';
import cartoonDog from '../../images/cartoonDog.jpg';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import style from './FavoritePets.module.css';
import { BiHomeHeart } from 'react-icons/bi';

const FavoritePetCard = ({ pet, onRemove }) => {
  const navigate = useNavigate();

  const handleRemove = () => {
    onRemove(pet._id);
  };

  // Function to handle adopting a pet
  const handleAdopt = (pet) => {
    console.log(`Adopt pet with ID: ${pet._id}`);
    Cookies.set('PetID', pet._id);
    Cookies.set('PetType', pet.petType);
    Cookies.set('PetName', pet.petName);
    navigate('/application/confirm');
  };

  return (
    <div className="petCard_wrapper ps-1 pe-1">
      <div
        className="petCard"
        style={{ margin: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <Card
          className="border-0 bg-transparent rounded relative"
          style={{ width: '19rem' }}
        >
          <Card.Img
            variant="top"
            style={{
              width: '100%',
              height: '25rem',
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
            <Card.Text className="text-center" style={{ marginBottom: '10px' }}>
              <span className="fw-bold">Gender:</span> {pet.gender} •{' '}
              <span className="fw-bold">Age:</span>{' '}
              {pet.petType === 'Cat' && pet.age === 'Baby'
                ? 'Kitten'
                : pet.petType === 'Dog' && pet.age === 'Baby'
                ? 'Puppy'
                : pet.age}{' '}
              <div className="d-flex justify-content-center">
                <Button
                  onClick={() => handleAdopt(pet)}
                  className={`btn ${style.buttonFavorite}`}
                  variant="btn-primary"
                  size="btn-lg"
                >
                  <span>
                    <BiHomeHeart size="1.5rem" className="pb-1 " /> Adopt
                  </span>
                </Button>
                <Button
                  onClick={() => handleRemove(pet)}
                  className={`btn ${style.buttonFavoriteRemove}`}
                  variant="btn-primary"
                  size="btn-lg"
                >
                  Remove
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FavoritePetCard;
