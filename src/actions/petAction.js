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

// Add pet to favorites
export const addPetToFavorites = async (petData, dispatch) => {
  dispatch({ type: 'ADD_PET_TO_FAVORITES_REQUEST' });
  try {
    const response = await axios.patch(`/api/v1/favorites/add`, petData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'ADD_PET_TO_FAVORITES_SUCCESS', payload: response.data.user.favorites });
  } catch (error) {
    dispatch({ type: 'ADD_PET_TO_FAVORITES_FAILURE' });
  }
};

// Remove pet from favorites
export const removePetFromFavorites = async (petData, dispatch) => {
  dispatch({ type: 'REMOVE_PET_FROM_FAVORITES_REQUEST' });
  try {
    const response = await axios.patch(`/api/v1/favorites/remove`, petData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("response.data.user.favorites: " + JSON.stringify(response.data.user.favorites))

    dispatch({ type: 'REMOVE_PET_FROM_FAVORITES_SUCCESS', payload: response.data.user.favorites });
  } catch (error) {
    dispatch({ type: 'REMOVE_PET_FROM_FAVORITES_FAILURE' });
  }
};
// Search pet filters
export const getSearchPetFilters = async (
  petType,
  breed,
  age,
  size,
  gender,
  goodWith,
  coatLength,
  color,
  careAndBehaviour,
  dispatch
) => {
  console.log(
    'getSearchPetFilters: ' +
      petType +
      ' ' +
      breed +
      ' ' +
      age +
      ' ' +
      size +
      ' ' +
      gender +
      ' ' +
      goodWith +
      ' ' +
      coatLength +
      ' ' +
      color +
      ' ' +
      careAndBehaviour
  );
  console.log(
    `/api/v1/pets/?${petType ? `petType=${petType}` : ''}${
      breed ? `&breed=${breed}` : ''
    }${age ? `&age=${age}` : ''}${size ? `&size=${size}` : ''}${
      gender ? `&gender=${gender}` : ''
    }${goodWith ? `&goodWith=${goodWith}` : ''}${
      coatLength ? `&coatLength=${coatLength}` : ''
    }${color ? `&color=${color}` : ''}${
      careAndBehaviour ? `&careAndBehaviour=${careAndBehaviour}` : ''
    }`
    // petType=${petType}&breed=${breed}&age=${age}&gender=${gender}&goodWith=${goodWith}&coatLength=${coatLength}&color=${color}&careAndBehaviour=${careAndBehaviour}`
  );
  dispatch({ type: 'GET_PET_FILTERS_REQUEST' });
  try {
    const response = await axios.get(
      `/api/v1/pets/?${petType ? `petType=${petType}` : ''}${
        breed ? `&breed=${breed}` : ''
      }${age ? `&age=${age}` : ''}${size ? `&size=${size}` : ''}${
        gender ? `&gender=${gender}` : ''
      }${goodWith ? `&goodWith=${goodWith}` : ''}${
        coatLength ? `&coatLength=${coatLength}` : ''
      }${color ? `&color=${color}` : ''}${
        careAndBehaviour ? `&careAndBehaviour=${careAndBehaviour}` : ''
      }`,

      //petType=${petType}&breed=${breed}&age=${age}&gender=${gender}&goodWith=${goodWith}&coatLength=${coatLength}&color=${color}&careAndBehaviour=${careAndBehaviour}`,

      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(
      'API Get search pet filters response count: ' +
        JSON.stringify(response.data.pets.length)
    ); // logging the response for testing purposes
    dispatch({ type: 'GET_PET_FILTERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'GET_PET_FILTERS_FAILURE',
      payload: error.response?.data?.message || error.message,
    });
  }
};
