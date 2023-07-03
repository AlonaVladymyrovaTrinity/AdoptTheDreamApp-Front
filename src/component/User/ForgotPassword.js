import React, { useState, useReducer, useEffect } from 'react';
import style from './ForgotPassword.module.css';
import Loader from '../layout/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';
import { forgotPassword } from '../../actions/userAction';
import {
  forgotPasswordReducer,
  initialState,
} from '../../reducers/userReducer';
import Alert from 'react-bootstrap/Alert';

const ForgotPassword = () => {
  const [state, dispatch] = useReducer(forgotPasswordReducer, initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');

  const forgotPasswordSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set('email', email);
    if (email !== '') {
      try {
        await forgotPassword(myForm, setErrorMessage, dispatch);
      } catch (error) {
        setErrorMessage('Error during password reset');
      }
      setEmail('');
    } else {
      setErrorMessage('');
      setErrorMessage('Please provide your email address');
    }
  };

  const { response, error } = state;

  useEffect(() => {
    console.log(error, response);
    if (
      ((response && response.length !== 0) || response !== undefined) &&
      response.success === true
    ) {
      setSuccessMessage(response.message);
    } else if (error || (response && response.success === false)) {
      setErrorMessage('');
      setErrorMessage(error && response.message);
    }
  }, [error, response]);

  return (
    <>
      {state.loading ? (
        <Loader className="small-spinner" />
      ) : (
        <>
          {' '}
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
          <div className={style['forgotPasswordContainer']}>
            <div className={style['forgotPasswordBox']}>
              <h1 className={style['forgotPasswordHeading']}>
                FORGOT PASSWORD
              </h1>

              <form
                className={style['forgotPasswordForm']}
                onSubmit={forgotPasswordSubmit}
              >
                <div className={style['forgotPasswordEmail']}>
                  {/* InputWithIcon Component for forgotPasswordForm field Email: input element with icon. */}
                  <InputWithIcon
                    type={'email'}
                    placeholder={'Email'}
                    required
                    name="email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputWithIcon>
                </div>
                {/* Form submit button */}
                <Button
                  className={style.forgotPasswordBtn}
                  variant="btn-primary"
                  size="btn-lg"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
