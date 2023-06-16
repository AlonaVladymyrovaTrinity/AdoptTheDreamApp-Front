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
import { initialState, petsReducer } from '../../reducers/petReducer';
import { getPet } from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';

const Pets = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [state, dispatch] = useReducer(petsReducer, initialState);

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
  const pets = useMemo(() => state.pets || {}, [state.pets]);

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
                  className="border-1 bg-transparent rounded mb-3"
                  // className={style['select-option']}
                  aria-label="Default select example"
                >
                  <option>Type</option>
                  <option value="1">Cat</option>
                  <option value="2">Dog</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Breed</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Age</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Good with</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Coat length</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
                >
                  <option>Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="border-1 bg-transparent rounded mb-3"
                  aria-label="Default select example"
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
                {Object.values(pets)
                  // .from({ length: 9 })
                  .map((pet, idx) => (
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
    </>
  );
};

export default Pets;
