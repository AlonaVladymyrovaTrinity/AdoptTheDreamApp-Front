import React, { useState } from 'react';
import style from './UpdateProfile.module.css';
import Loader from '../layout/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';
// import ProfileImg from '../../images/Profile.png';

const UpdateProfile = () => {
  //---server loading simulation---
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  //--------------------------------

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [avatar, setAvatar] = useState();
  // const [avatarPreview, setAvatarPreview] = useState(ProfileImg);

  //The updateProfileSubmit function handles the form submission by preventing the default form submission behavior,
  //creating a new FormData object with form data, and logging the form data to the console for temporary debugging purposes.
  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('email', email);
    // myForm.set('avatar', avatar);
    //---temporary console output of Register Submit form. This data will be passed to beknd later---
    console.log('Form Data');
    for (let obj of myForm) {
      console.log(obj);
    }
    //-------------------------
  };
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
      {loading ? (
        // Spinner styled component
        <Loader className="small-spinner" />
      ) : (
        <>
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
