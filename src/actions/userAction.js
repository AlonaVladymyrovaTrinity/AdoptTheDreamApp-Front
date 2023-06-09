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
    console.log('login result:' + JSON.stringify(res)); // Loging the response for testing purposes
    setSuccessMessage('User successfully logged in.');

    // Store token and user ID in cookies
    Cookies.set('token', res.data.token);
    Cookies.set('userId', res.data.userId);
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE' });
    // Error handling: showing an error message
    console.error('Error:', error);
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
    console.log(JSON.stringify(res)); // Loging the response for testing purposes
    console.log(res.statusText); // Loging the statusText response for testing purposes
    setSuccessMessage('User account successfully created. You can login now');

    // Store token and user ID in cookies
    Cookies.set('token', res.data.token);
    Cookies.set('userId', res.data.userId);
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAIL' });
    // Error handling: showing an error message
    console.error('Error:', error);
    if (error.response && error.response.data && error.response.data.msg) {
      setErrorMessage(
        error.response?.data?.msg ||
          'An error occurred during registration. Please try again.'
      );
      console.log(error.response.data.msg);
    }
  }
};

// Load User
export const loadUser = async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_USER_REQUEST' });

    axios.defaults.withCredentials = true;
    const response = await axios.get(`/api/v1/me/${Cookies.get('userId')}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    dispatch({ type: 'LOAD_USER_SUCCESS', payload: response.data.user });
    console.log('respons: ' + JSON.stringify(response.data.user)); // Loging the response for testing purposes
  } catch (error) {
    dispatch({
      type: 'LOAD_USER_FAIL',
      payload: error.response?.data?.message || error.message,
    });
    console.log('error ' + error);
  }
};
