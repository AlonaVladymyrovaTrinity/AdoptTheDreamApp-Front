import React, { useState, useReducer, useEffect, useMemo } from 'react';
// import redCat from '../../images/redCat.mp4';
import Loader from '../layout/Loader/Loader';
import PetCard from '../Home/PetCard';
// import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './Pets.module.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {
  initialState,
  petsReducer,
  catBreedsReducer,
  dogBreedsReducer,
} from '../../reducers/petReducer';
import { getPet, getCatBreeds, getDogBreeds } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';

const Pets = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [state, dispatch] = useReducer(petsReducer, initialState);
  const [stateCatBreed, dispatchCatBreed] = useReducer(
    catBreedsReducer,
    initialState
  );
  const [stateDogBreed, dispatchDogBreed] = useReducer(
    dogBreedsReducer,
    initialState
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPet(dispatch);
      } catch (error) {
        setErrorMessage('');
        setErrorMessage('Error loading pets');
      }
    };
    fetchData();
  }, []);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pets = useMemo(() => Object.values(state.pets || {}), [state.pets]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPets = pets.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedType, setSelectedType] = useState('');
  useEffect(() => {
    const fetchBreeds = async () => {
      if (selectedType === 'Cat') {
        try {
          await getCatBreeds(dispatchCatBreed);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading cat breeds');
        }
      }
      if (selectedType === 'Dog') {
        try {
          await getDogBreeds(dispatchDogBreed);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading dog breeds');
        }
      }
    };
    fetchBreeds();
  }, [selectedType]);

  const optionsBreed = {};
  if (selectedType === 'Cat') {
    const catBreeds = stateCatBreed.catBreeds || [];
    catBreeds.forEach((breed) => {
      optionsBreed[breed] = breed;
    });
  }
  if (selectedType === 'Dog') {
    const dogBreeds = stateDogBreed.dogBreeds || [];
    dogBreeds.forEach((breed) => {
      optionsBreed[breed] = breed;
    });
  }

  const optionsType = {
    Cat: 'Cat',
    Dog: 'Dog',
  };
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleSelectTypeChange = (event) => {
    const selectedPetType = event.target.value;
    setSelectedType(selectedPetType);
  };
  const handleSelectBreedChange = async (event) => {
    const selectedPetBreed = event.target.value;
    setSelectedBreed(selectedPetBreed);
    const breed = selectedPetBreed;
    alert(breed);
  };
  return (
    <>
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}
      <div className={style.pets_container}>
        <span className={style.homePage_txt}>
          <h3>CHOOSE YOUR PET</h3>
        </span>
        {state.loading ? (
          <Loader className="small-spinner" />
        ) : (
          <div className={style.cardsContainerWithSelect}>
            <div className={style.selectBox}>
              <Nav style={{ width: '12rem' }} className="flex-column p-3">
                <Form.Select
                  id="PetType"
                  name="PetType"
                  className="border-1 bg-transparent rounded mb-3"
                  disabled={!Array.isArray(pets) || pets.length === 0}
                  onChange={handleSelectTypeChange}
                  value={selectedType}
                >
                  <option disabled value="">
                    Type
                  </option>
                  {Object.entries(optionsType).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Select
                  id="PetBreed"
                  name="PetBreed"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectBreedChange}
                  value={selectedBreed}
                >
                  <option disabled value="">
                    Breed
                  </option>
                  {Object.entries(optionsBreed).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Age</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Good with</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Coat length</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  aria-label="Default select example"
                  disabled={true}
                >
                  <option>Care & behavior</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Nav>
            </div>
            <div className={style.cardsContainer} fluid="md" id="container">
              <Row xs={1} md={2} lg={3} className="row-cols-auto g-col-4">
                {Object.values(currentPets).map((pet, idx) => (
                  <Col className="mb-4" key={idx}>
                    <div className={style.grid_item}>
                      <PetCard pet={pet} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Pagination className="pagination-centered">
          {Array.from({
            length: Math.ceil(pets.length / itemsPerPage),
          }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={style['custom-pagination-link']}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Pets;
