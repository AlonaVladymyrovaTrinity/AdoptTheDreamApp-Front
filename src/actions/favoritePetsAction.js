import axios from 'axios';

// Get favorites pets for logged in user
export const getFavoritePets = async (dispatch) => {
  dispatch({ type: 'GET_FAVORITE_PETS_REQUEST' });
  try {
    const response = await axios.get(`/api/v1/favorites`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'GET_FAVORITE_PETS_SUCCESS', payload: response.data.pets });
  } catch (error) {
    dispatch({ type: 'GET_FAVORITE_PETS_FAILURE', payload: error.response?.data?.message || error.message });
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
    dispatch({ type: 'REMOVE_PET_FROM_FAVORITES_SUCCESS', payload: response.data.user.favorites });
  } catch (error) {
    dispatch({ type: 'REMOVE_PET_FROM_FAVORITES_FAILURE' });
  }
};

// Reset error message
export const resetError = (dispatch) => {
  dispatch({ type: 'RESET_ERROR_MESSAGE_REQUEST' });
};