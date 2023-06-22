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

// Get Cat Colors
export const getCatColors = async (dispatch) => {
  try {
    dispatch({ type: 'CAT_COLORS_REQUEST' });
    const response = await axios.get(`/api/v1/cat-colors`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('Get Cat Colors response: ' + JSON.stringify(response.data)); // logging the response for testing purposes
    dispatch({
      type: 'CAT_COLORS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CAT_COLORS_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get Dog Colors
export const getDogColors = async (dispatch) => {
  try {
    dispatch({ type: 'DOG_COLORS_REQUEST' });
    const response = await axios.get(`/api/v1/dog-colors`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('Get Dog Colors response: ' + JSON.stringify(response.data)); // logging the response for testing purposes
    dispatch({
      type: 'DOG_COLORS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'DOG_COLORS_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Add Pet to Favorites
export const addPetToFavorites = async (id, dispatch) => {
  dispatch({ type: 'FAVORITE_PET_ON_PET_DETAILS_REQUEST' });
  try {
    await axios.patch('/api/v1/favorites/add', { petId: id }, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("SUCCESS")
    dispatch({
      type: 'FAVORITE_PET_ON_PET_DETAILS_SUCCESS'
    });
  } catch (error) {
    console.log("FAILURE")
    dispatch({
      type: 'FAVORITE_PET_ON_PET_DETAILS_FAILURE',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Remove Pet from Favorites
export const removePetFromFavorites = async (id, dispatch) => {
  dispatch({ type: 'UNFAVORITE_PET_ON_PET_DETAILS_REQUEST' });
  try {
    await axios.patch('/api/v1/favorites/add', { petId: id }, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("SUCCESS")
    dispatch({
      type: 'UNFAVORITE_PET_ON_PET_DETAILS_SUCCESS'
    });
  } catch (error) {
    console.log("FAILURE")
    dispatch({
      type: 'UNFAVORITE_PET_ON_PET_DETAILS_FAILURE',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get Pet isFavorite (for current logged in user)
export const getPetIsFavoriteStatus = async (id, dispatch) => {
  dispatch({ type: 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_REQUEST' });
  try {
    const response = await axios.get(`/api/v1/favorites/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("SUCCESS")
    dispatch({
      type: 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_SUCCESS',
      payload: response.data.isFavorite
    });
  } catch (error) {
    console.log("FAILURE")
    dispatch({
      type: 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_FAILURE',
      payload: error.response?.data?.message || error.message,
    });
  }
};
