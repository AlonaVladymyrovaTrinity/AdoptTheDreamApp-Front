import axios from 'axios';

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
