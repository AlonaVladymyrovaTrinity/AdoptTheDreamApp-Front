import React, { useState } from 'react';
import './LoginSignUp.css';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileImg from '../../images/Profile.png';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState('login');
  //This function switch tabs: login/register
  //depending on LOGIN/REGISTER toggle buttoons
  const switchTabs = (tab) => {
    setActiveTab(tab);
  };

  //---server loading simulation---
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  //--------------------------------

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState(ProfileImg);
  const [avatarPreview, setAvatarPreview] = useState(ProfileImg);

  //The loginSubmit function handles the form submission by preventing the default form submission behavior
  // and logging the login email and password to the console for temporary debugging purposes.
  const loginSubmit = (e) => {
    e.preventDefault();
    //---temporary console output of Login Submit form. This data will be passed to beknd later---
    console.log(loginEmail, loginPassword);
    //-------------------------
  };

  //The registerSubmit function handles the form submission by preventing the default form submission behavior,
  //creating a new FormData object with form data, and logging the form data to the console for temporary debugging purposes.
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    //---temporary console output of Register Submit form. This data will be passed to beknd later---
    console.log('Form Data');
    for (let obj of myForm) {
      console.log(obj);
    }
    //-------------------------
  };

  //This function handles data changes in an input form, updating the avatar-related state if triggered by an avatar input field,
  //and updating the user state for other input fields.
  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
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
      {loading ? (
        // Spinner styled component
        <Loader className="small-spinner" />
      ) : (
        <>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                {/* LOGIN/REGISTER toggle buttoons */}
                <div className="login_signUp_toggle">
                  <p onClick={() => switchTabs('login')}>LOGIN</p>
                  <p onClick={() => switchTabs('register')}>REGISTER</p>
                </div>
                <button
                  className={`${
                    activeTab === 'login' ? 'shiftToNeutral' : 'shiftToRight'
                  }`}
                ></button>
              </div>
              {/* LoginForm tab */}
              <form
                className={`loginForm ${activeTab === 'login' ? '' : ''} ${
                  activeTab === 'register' ? 'shiftToLeft' : ''
                }`}
                onSubmit={loginSubmit}
              >
                <div className="loginEmail">
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
                <div className="loginPassword">
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
                <Link to="/password/forgot">Forget Password ?</Link>
                {/* LoginForm submition button */}
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              {/* SignUpForm tab */}
              <form
                className={`signUpForm ${activeTab === 'login' ? '' : ''} ${
                  activeTab === 'register' ? 'shiftToNeutralForm' : ''
                }`}
                encType="multipart/form-data" //this attribute is necessary for file uploads
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
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
                <div className="signUpEmail">
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
                <div className="signUpPassword">
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
                <div className="registerImage">
                  {/* Avatar Previe image */}
                  <img src={avatarPreview} alt="Avatar Preview" />
                  {/* Add avatar button */}
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                {/* SignUpForm submition button */}
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginSignUp;
