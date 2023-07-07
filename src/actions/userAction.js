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
    Cookies.set('user-id', res.data.userId, {
      expires: 60,
    });
    Cookies.set('user-name', res.data.user.name, {
      expires: 60,
    });

    console.log('login result:' + JSON.stringify(res)); // logging the response for testing purposes
    setSuccessMessage('User successfully logged in.');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE' });
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
  try {
    const res = await axios.post('/api/v1/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'REGISTER_USER_SUCCESS' });
    Cookies.set('user-id', res.data.userId, {
      expires: 60,
    });
    Cookies.set('user-name', res.data.user.name, {
      expires: 60,
    });

    //console.log(JSON.stringify(res)); // logging the response for testing purposes
    //console.log(res.statusText); // logging the statusText response for testing purposes
    setSuccessMessage('User account successfully created. You can login now');
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAIL' });
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
    const response = await axios.get(`/api/v1/me`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: 'LOAD_USER_SUCCESS', payload: response.data.user });
    //console.log('response: ' + JSON.stringify(response.data.user)); // logging the response for testing purposes
    // return { isAuthenticated: true }; // Return the authentication status
  } catch (error) {
    dispatch({
      type: 'LOAD_USER_FAIL',
      payload: error.response?.data?.message || error.message,
    });
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
    Cookies.remove('user-id', { path: '' });
    Cookies.remove('user-name', { path: '' });
  } catch (error) {
    dispatch({
      type: 'LOGOUT_FAIL',
      payload: error.response?.data?.message || error.message,
    });
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
    /*const response =*/ await axios.patch('/api/v1/me/update', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log('Update Profile response: ' + JSON.stringify(response.data.msg)); // logging the response for testing purposes
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

// Update Password
export const updateUserPassword = async (
  oldPassword,
  newPassword,
  setErrorMessage,
  dispatch
) => {
  dispatch({ type: 'UPDATE_PASSWORD_REQUEST' });
  try {
    const res = await axios.patch(
      `/api/v1/me/password`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({
      type: 'UPDATE_PASSWORD_SUCCESS',
      payload: res.statusText,
    });
    console.log('Update password result:', res.statusText); // logging the response message for testing purposes
  } catch (error) {
    dispatch({
      type: 'UPDATE_PASSWORD_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    // Error handling: showing an error message
    console.error('Error:', error);
    setErrorMessage(
      'An error occurred during password update. Please try again.'
    );
  }
};

// Forgot Password
export const forgotPassword = async (email, setErrorMessage, dispatch) => {
  dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });
  try {
    const response = await axios.post(`/api/v1/password/forgot`, email, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: response.data });
    // console.log('Forgot password request:', response.data); // logging the response message for testing purposes
  } catch (error) {
    dispatch({
      type: 'FORGOT_PASSWORD_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    // Error handling: showing an error message
    console.error('Error:', error);
    setErrorMessage(
      'An error occurred during forgot password request. Please try again.'
    );
  }
};
