import React, { useState, useReducer, useEffect } from 'react';
import style from './UpdateProfile.module.css';
import Loader from '../layout/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';
import { updateUserProfile } from '../../actions/userAction';
import Alert from 'react-bootstrap/Alert';
import { initialState, profileReducer } from '../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

//This functionality will be added later
// import ProfileImg from '../../images/Profile.png';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //This functionality will be added later
  // const [avatar, setAvatar] = useState();
  // const [avatarPreview, setAvatarPreview] = useState(ProfileImg);

  //The updateProfileSubmit function handles the form submission by preventing the default form submission behavior,
  //creating a new FormData object with form data, and logging the form data to the console for temporary debugging purposes.
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    // Check if email and name are empty
    if (!email || !name) {
      setErrorMessage('Please enter your name and email');
      // Check if email and name are empty
      return;
    }
    const myForm = new FormData();
    myForm.set('name', name);
    myForm.set('email', email);
    //This functionality will be added later
    // myForm.set('avatar', avatar);
    updateUserProfile(myForm, setErrorMessage, setSuccessMessage, dispatch);
  };

  useEffect(() => {
    // Redirect to '/account'
    if (state.isUpdated === true) {
      setTimeout(() => {
        navigate('/account');
      }, 1000);
    }
  }, [state.isUpdated, navigate]);

  //This functionality will be added later
  //This updateProfileDataChange function updates the profile data by setting the avatar preview and avatar based on the selected file.
  // const updateProfileDataChange = (e) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatarPreview(reader.result);
  //       setAvatar(reader.result);
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };

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
          <div className={style.updateProfileContainer}>
            <div className={style.updateProfileBox}>
              {/* Page description title */}
              <h2 className={style.updateProfileHeading}>UPDATE PROFILE</h2>

              <form
                className={style.updateProfileForm}
                onSubmit={updateProfileSubmit}
              >
                <div className={style.updateProfileName}>
                  {/* InputWithIcon Component used for UpdateProfileForm field Name: input element with icon. */}
                  <InputWithIcon
                    type={'text'}
                    placeholder={'Name'}
                    required
                    name="name"
                    value={name}
                    handleChange={(e) => setName(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </InputWithIcon>
                </div>
                <div className={style.updateProfileEmail}>
                  {/* InputWithIcon Component used for UpdateProfileForm field Email: input element with icon. */}
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
                {/* This functionality will be added later  */}
                {/* <div className={style.updateProfileImage}> */}
                {/* Avatar Previe image */}
                {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
                {/* Add avatar button */}
                {/* <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div> */}
                {/* updateProfileForm submition button */}
                <button
                  className={`btn ${style.updateProfileBtn}`}
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateProfile;
