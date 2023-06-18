import axios from 'axios';

// Get Pet Details
export const loadPet = async (id, setErrorMessage, dispatch) => {
  dispatch({ type: 'LOAD_PET_REQUEST' });
  try {
    const response = await axios.get(`/api/v1/pets/${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'LOAD_PET_SUCCESS', payload: response.data.pet });
  } catch (error) {
    dispatch({ type: 'LOAD_PET_FAILURE' });
    setErrorMessage(`An error occurred during loading pet with id ${id}`);
  }
};
// Get All Pets
export const getPet = async (dispatch) => {
  try {
    dispatch({ type: 'ALL_PET_REQUEST' });
    const response = await axios.get(`/api/v1/pets`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('Get All Pets response: ' + JSON.stringify(response.data)); // logging the response for testing purposes
    dispatch({
      type: 'ALL_PET_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'ALL_PET_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};
// Get Cat Breeds
export const getCatBreeds = async (dispatch) => {
  try {
    dispatch({ type: 'CAT_BREEDS_REQUEST' });
    const response = await axios.get(`/api/v1/cat-breeds`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('Get Cat Breeds response: ' + JSON.stringify(response.data)); // logging the response for testing purposes
    dispatch({
      type: 'CAT_BREEDS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CAT_BREEDS_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get Dog Breeds
export const getDogBreeds = async (dispatch) => {
  try {
    dispatch({ type: 'DOG_BREEDS_REQUEST' });
    const response = await axios.get(`/api/v1/dog-breeds`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('Get Dog Breeds response: ' + JSON.stringify(response.data)); // logging the response for testing purposes
    dispatch({
      type: 'DOG_BREEDS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'DOG_BREEDS_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};
