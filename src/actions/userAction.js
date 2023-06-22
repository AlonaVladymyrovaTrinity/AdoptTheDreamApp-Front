import axios from 'axios';
import Cookies from 'js-cookie';

// Login
export const login = async (
  email,
  password,
  setErrorMessage,
  setSuccessMessage,
  dispatch
) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  Cookies.set('isAuthenticated', false);
  try {
    const res = await axios.post(
      '/api/v1/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({ type: 'LOGIN_SUCCESS' });
    Cookies.set('isAuthenticated', true);
    Cookies.set('user-id', res.data.userId);
    Cookies.set('user-name', res.data.user.name);
    //console.log('login result:' + JSON.stringify(res)); // logging the response for testing purposes
    setSuccessMessage('User successfully logged in.');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE' });
    Cookies.set('isAuthenticated', false);
    // Error handling: showing an error message
    //console.error('Error:', error);
    setErrorMessage('An error occurred during login. Please try again.');
  }
};

// Register
export const register = async (
  userData,
  setErrorMessage,
  setSuccessMessage,
  dispatch
) => {
  dispatch({ type: 'REGISTER_USER_REQUEST' });
  Cookies.set('isAuthenticated', false);
  try {
    const res = await axios.post('/api/v1/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'REGISTER_USER_SUCCESS' });
    Cookies.set('isAuthenticated', true);
    Cookies.set('user-id', res.data.userId);
    Cookies.set('user-name', res.data.user.name);
    //console.log(JSON.stringify(res)); // logging the response for testing purposes
    //console.log(res.statusText); // logging the statusText response for testing purposes
    setSuccessMessage('User account successfully created. You can login now');
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAIL' });
    Cookies.set('isAuthenticated', false);
    // Error handling: showing an error message
    console.error('Error:', error);
    if (error.response && error.response.data && error.response.data.msg) {
      setErrorMessage(
        error.response?.data?.msg ||
          'An error occurred during registration. Please try again.'
      );
      //console.log(error.response.data.msg);
    }
  }
};

// Load User
export const loadUser = async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_USER_REQUEST' });
    Cookies.set('isAuthenticated', false);
    const response = await axios.get(`/api/v1/me`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: 'LOAD_USER_SUCCESS', payload: response.data.user });
    Cookies.set('isAuthenticated', true);
    //console.log('response: ' + JSON.stringify(response.data.user)); // logging the response for testing purposes
    return { isAuthenticated: true }; // Return the authentication status
  } catch (error) {
    dispatch({
      type: 'LOAD_USER_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    Cookies.set('isAuthenticated', false);
    //console.log('error ' + error);
    //return { isAuthenticated: false }; // Return the authentication status
  }
};

// Logout User
export const logout = async (dispatch) => {
  try {
    /* const response = */ await axios.get(`/api/v1/logout`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log('Logout response: ' + JSON.stringify(response.data.success)); // logging the response for testing purposes
    dispatch({ type: 'LOGOUT_SUCCESS' });
    Cookies.set('isAuthenticated', false);
    Cookies.remove('user-id', { path: '' });
    Cookies.remove('user-name', { path: '' });
  } catch (error) {
    dispatch({
      type: 'LOGOUT_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    Cookies.set('isAuthenticated', true);
    throw error;
  }
};

// Update Profile
export const updateUserProfile = async (
  userData,
  setErrorMessage,
  setSuccessMessage,
  dispatch
) => {
  dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
  try {
    const response = await axios.patch('/api/v1/me/update', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(
      'Update Profile response: ' + JSON.stringify(response.data.msg)
    ); // logging the response for testing purposes
    dispatch({ type: 'UPDATE_PROFILE_SUCCESS' });
    setSuccessMessage('Profile successfully updated!');
  } catch (error) {
    dispatch({
      type: 'UPDATE_PROFILE_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    console.log('Error', error.message); // logging the error for testing purposes
    setErrorMessage(
      'Apologies, but an error occurred while updating your profile. Please try again later.'
    );
  }
};
