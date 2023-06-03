import axios from 'axios';
import Cookies from 'js-cookie';

// Login
export const login = async (
  email,
  password,
  setLoading,
  setErrorMessage,
  setSuccessMessage
) => {
  try {
    setLoading(true);

    const res = await axios.post(
      '/api/v1/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res); // Loging the response for testing purposes
    setSuccessMessage('User successfully created.');
    // Store token in cookie
    Cookies.set('token', res.token);
    setLoading(false);
  } catch (error) {
    // Error handling will be here: showing an error message
    console.error('Error:', error);
    setErrorMessage('An error occurred during login. Please try again.');
    setLoading(false);
  } finally {
    setLoading(false);
  }
};

// Register
export const register = async (
  userData,
  setLoading,
  setErrorMessage,
  setSuccessMessage
) => {
  try {
    setLoading(true);
    const res = await axios.post('/api/v1/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(res);
    console.log(res.statusText);
    setSuccessMessage('User successfully created.');
    // Store token in cookie
    Cookies.set('token', res.token);
    setLoading(false);
  } catch (error) {
    // Error handling: showing an error message
    console.error('Error:', error);
    if (error.response && error.response.data && error.response.data.msg) {
      setErrorMessage(
        error.response?.data?.msg ||
          'An error occurred during registration. Please try again.'
      );
      console.log(error.response.data.msg);
    }
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
