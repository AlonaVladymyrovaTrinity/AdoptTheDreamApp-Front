import React, { useState, useReducer, useEffect } from 'react';
import style from './UpdatePassword.module.css';
import Loader from '../layout/Loader/Loader';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiKeyOutline } from '@mdi/js';
import { updateUserPassword } from '../../actions/userAction';
import {
  updatePasswordReducer,
  initialState,
} from '../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';

const UpdatePassword = () => {
  const [state, dispatch] = useReducer(updatePasswordReducer, initialState);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updatePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        await updateUserPassword(
          oldPassword,
          newPassword,
          setErrorMessage,
          dispatch
        );
      } catch (error) {
        setErrorMessage('Error updating password');
      }
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setErrorMessage(''); // clear any previous error message
      setErrorMessage('Passwords do not match');
    }
  };

  const { msg, error } = state;

  useEffect(() => {
    setErrorMessage('');
    setSuccessMessage('');
    if (msg === 'OK') {
      setSuccessMessage('Password updated successfully!');
      setTimeout(() => {
        navigate('/account');
      }, 1000);
    } else if (error) {
      setErrorMessage(
        `Error updating password. ${error} Please try again later.`
      );
    }
  }, [msg, error, navigate]);

  return (
    <>
      {state.loading ? (
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
          <div className={style.updatePasswordContainer}>
            <div className={style.updatePasswordBox}>
              {/* Page description title */}
              <h2 className={style.updatePasswordHeading}>UPDATE PROFILE</h2>

              <form
                className={style.updatePasswordForm}
                onSubmit={updatePasswordSubmit}
              >
                <div className={style.loginPassword}>
                  <InputWithIcon
                    type={'password'}
                    placeholder={'Old Password'}
                    required
                    value={oldPassword}
                    handleChange={(e) => setOldPassword(e.target.value)}
                  >
                    <Icon path={mdiKeyOutline} size={1} />
                  </InputWithIcon>
                </div>

                <div className={style.loginPassword}>
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
                <div className={style.loginPassword}>
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
                  className={`btn ${style.updatePasswordBtn}`}
                  type="submit"
                >
                  Change
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdatePassword;
