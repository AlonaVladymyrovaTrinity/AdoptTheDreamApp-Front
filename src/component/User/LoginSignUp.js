import React, { useState, useReducer, useEffect } from 'react';
import style from './LoginSignUp.module.css';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from '../../images/Profile.png';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';
import { login, register } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { initialState, userReducer } from '../../reducers/userReducer';

const LoginSignUp = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  //This function switch tabs: login/register
  //depending on LOGIN/REGISTER toggle buttons
  const switchTabs = (tab) => {
    setActiveTab(tab);
  };
  const { name, email, password } = user;

  const [avatar, setAvatar] = useState(ProfileImg);
  // const [avatarPreview, setAvatarPreview] = useState(ProfileImg);

  // This code defines a function that prevents the default form submission behavior, calls a login function with email, password,
  // and a loading state updater, and then redirects the user to the '/account' page.
  const loginSubmit = (e) => {
    e.preventDefault();
    login(
      loginEmail,
      loginPassword,
      setErrorMessage,
      setSuccessMessage,
      dispatch
    );
    setLoginEmail('');
    setLoginPassword('');
  };
  // Reset function to set specific state values back to initial values
  const resetFields = () => {
    setUser({ ...user, name: '', email: '', password: '' });
    setAvatar(ProfileImg);
  };

  useEffect(() => {
    // Redirect to '/account'
    if (state.isAuthenticated === true) {
      navigate('/account');
    }
  }, [state.isAuthenticated, navigate]);

  // The registerSubmit function prevents the default form submission behavior, creates a new FormData
  // object with user input values, and invokes the register function with the form data, loading state
  // updater, error message state updater, and success message state updater as arguments.
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    register(myForm, setErrorMessage, setSuccessMessage, dispatch);
    // Reset fields
    resetFields();
  };

  //This function handles data changes in an input form, updating the avatar-related state if triggered by an avatar input field,
  //and updating the user state for other input fields.
  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          // setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      {/* Conditional rendering based on loading state */}
      {state.loading ? (
        // Spinner styled component
        <Loader className="small-spinner" />
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
          <div className={style['LoginSignUpContainer']}>
            <div className={style['LoginSignUpBox']}>
              <div className={style.ContainerWithButtons}>
                {/* LOGIN/REGISTER toggle buttons */}
                <div className={style['login_signUp_toggle']}>
                  <p onClick={() => switchTabs('login')}>LOGIN</p>
                  <p onClick={() => switchTabs('register')}>REGISTER</p>
                </div>
                <button
                  className={`${
                    activeTab === 'login'
                      ? `${style['shiftToNeutral']}`
                      : `${style['shiftToRight']}`
                  }`}
                ></button>
              </div>
              {/* LoginForm tab */}
              <form
                className={`${style.loginForm} ${
                  activeTab === 'login' ? '' : ''
                } ${activeTab === 'register' ? `${style.shiftToLeft}` : ''}`}
                onSubmit={loginSubmit}
              >
                <div className={style['loginEmail']}>
                  {/* InputWithIcon Component for LoginForm field Email: input element with icon. */}
                  <InputWithIcon
                    type={'email'}
                    placeholder={'Email'}
                    required
                    value={loginEmail}
                    handleChange={(e) => setLoginEmail(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputWithIcon>
                </div>
                <div className={style['loginPassword']}>
                  {/* InputWithIcon Component for LoginForm field Password: input element with icon. */}
                  <InputWithIcon
                    type={'password'}
                    placeholder={'Password'}
                    required
                    value={loginPassword}
                    handleChange={(e) => setLoginPassword(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faUnlockKeyhole} />
                  </InputWithIcon>
                </div>
                <Link to="/password/forgot">Forgot Password ?</Link>
                {/* LoginForm submition button */}
                <button className={`btn ${style.loginBtn}`} type="submit">
                  Login
                </button>
              </form>
              {/* SignUpForm tab */}
              <form
                className={`${style.signUpForm} ${
                  activeTab === 'login' ? '' : ''
                } ${
                  activeTab === 'register' ? `${style.shiftToNeutralForm}` : ''
                }`}
                encType="multipart/form-data" //this attribute is necessary for file uploads
                onSubmit={registerSubmit}
              >
                <div className={style.signUpName}>
                  {/* InputWithIcon Component for SignUpForm field Name: input element with icon. */}
                  <InputWithIcon
                    type={'text'}
                    placeholder={'Name'}
                    required
                    value={name}
                    handleChange={registerDataChange}
                    id={'name'}
                    name={'name'}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </InputWithIcon>
                </div>
                <div className={style.signUpEmail}>
                  {/* InputWithIcon Component for SignUpForm field Email: input element with icon. */}
                  <InputWithIcon
                    type={'email'}
                    placeholder={'Email'}
                    required
                    value={email}
                    handleChange={registerDataChange}
                    id={'email'}
                    name={'email'}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputWithIcon>
                </div>
                <div className={style.signUpPassword}>
                  {/* InputWithIcon Component for SignUpForm field Password: input element with icon. */}
                  <InputWithIcon
                    type={'password'}
                    placeholder={'Password'}
                    required
                    value={password}
                    handleChange={registerDataChange}
                    id={'password'}
                    name={'password'}
                  >
                    <FontAwesomeIcon icon={faUnlockKeyhole} />
                  </InputWithIcon>
                </div>
                {/* <div className={style.registerImage}> */}
                {/* Avatar Previe image */}
                {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
                {/* Add avatar button */}
                {/* <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div> */}
                {/* SignUpForm submition button */}
                <button className={`btn ${style.signUpBtn}`} type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginSignUp;
