import axios from 'axios';

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
    /* const res =*/ await axios.post(
      '/api/v1/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({ type: 'LOGIN_SUCCESS' });
    //console.log('login result:' + JSON.stringify(res)); // logging the response for testing purposes
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
    /* const res = */ await axios.post('/api/v1/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'REGISTER_USER_SUCCESS' });
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
  } catch (error) {
    dispatch({
      type: 'LOAD_USER_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    //console.log('error ' + error);
  }
};

// Logout User
export const logout = async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/logout`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Logout response: ' + JSON.stringify(response.data.success)); // logging the response for testing purposes
    dispatch({ type: 'LOGOUT_SUCCESS' });
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
