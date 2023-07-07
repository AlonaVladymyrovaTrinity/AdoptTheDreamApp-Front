import React, { useState, useReducer, useEffect } from 'react';
import style from './ResetPassword.module.css';
import Loader from '../layout/Loader/Loader';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { resetPassword } from '../../actions/userAction';
import {
  forgotPasswordReducer,
  initialState,
} from '../../reducers/userReducer';
import { useNavigate, useParams } from 'react-router-dom';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(forgotPasswordReducer, initialState);
  const { error, response, loading } = state;
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { userID } = useParams();
  const { token } = useParams();
  const resetPasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(token);
    if (newPassword === confirmPassword) {
      try {
        await resetPassword(
          newPassword,
          confirmPassword,
          userID,
          token,
          dispatch
        );
      } catch (error) {
        setErrorMessage('');
        setErrorMessage(
          `There was an error while resetting your password. ${error}`
        );
      }
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setErrorMessage('');
      setErrorMessage('Passwords do not match');
    }
  };

  useEffect(() => {
    setErrorMessage('');
    setSuccessMessage('');
    if (error) {
      setErrorMessage(
        `There was an error while resetting your password. ${error} Please attempt the process again at a later time.`
      );
    }
    if (response) {
      setSuccessMessage('Your password has been successfully reset.');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  }, [dispatch, error, navigate, response]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {successMessage && (
            <Alert
              variant="success"
              onClose={() => setSuccessMessage('')}
              dismissible
            >
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage('')}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <div className={style.resetPasswordContainer}>
            <div className={style.resetPasswordBox}>
              <h2 className={style.resetPasswordHeading}>RESET PASSWORD</h2>

              <form
                className={style.resetPasswordForm}
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <InputWithIcon
                    type={'password'}
                    placeholder={'New Password'}
                    required
                    value={newPassword}
                    handleChange={(e) => setNewPassword(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faUnlockKeyhole} />
                  </InputWithIcon>
                </div>
                <div className={style.resetPassword}>
                  <InputWithIcon
                    type={'password'}
                    placeholder={'Confirm Password'}
                    required
                    value={confirmPassword}
                    handleChange={(e) => setConfirmPassword(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faLock} />
                  </InputWithIcon>
                </div>
                <button
                  className={`btn ${style.resetPasswordBtn}`}
                  type="submit"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResetPassword;
