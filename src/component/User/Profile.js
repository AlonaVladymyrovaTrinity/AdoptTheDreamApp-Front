import React, { useState, useEffect, useReducer } from 'react';
import Loader from '../layout/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import NavigateButton from '../layout/NavigateButton/NavigateButton';
import { initialState, userReducer } from '../../reducers/userReducer';
import { loadUser } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ProfileImg from '../../images/Profile.png';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from 'mdb-react-ui-kit';
import style from './Profile.module.css';

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useReducer(userReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser(dispatch);
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    if (state.isAuthenticated === false) {
      // console.log(state.isAuthenticated);
      navigate('/');
    } else {
      setErrorMessage('Logout unsuccessful. Try again');
    }
  };

  const user = state.user || {};

  if (
    !user ||
    (Array.isArray(user) && user.length === 0) ||
    (typeof user === 'string' && user.trim() === '') ||
    (typeof user === 'object' && Object.keys(user).length === 0)
  ) {
    setErrorMessage('Error: User data is missing or empty.');
    return <Alert variant="danger">{errorMessage}</Alert>;
  }

  return (
    <>
      {state.loading ? (
        <Loader className="small-spinner" />
      ) : (
        <>
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage('')}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <div className={style['profile-heading-wrapper']}>
            <h1 className="sr-only">User Profile</h1>
            <h2 className={style['profile-heading']}>Welcome, {user.name}!</h2>
          </div>
          <section>
            {/* ---User Profile Container--- */}
            <MDBContainer className={style['profile-container']}>
              {' '}
              <MDBRow className="justify-content-center align-items-center">
                <MDBCol lg="9" className="mb-lg-0">
                  <MDBCard style={{ borderRadius: '.5rem' }}>
                    <MDBRow className="g-0">
                      {/* Left side of the User Profile card */}
                      <MDBCol
                        md="4"
                        className={`${style['gradient-custom']} text-center text-white`}
                        style={{
                          borderRadius: '.5rem',
                        }}
                      >
                        {/*---User Image, Name, Edit profile button---*/}
                        <MDBCardText className="my-5">My Profile</MDBCardText>
                        {/* User Image */}
                        <MDBCardImage
                          src={ProfileImg}
                          alt={user.name}
                          className="my-3"
                          style={{ width: '8rem' }}
                          fluid
                        />
                        {/* User Name */}
                        <MDBTypography tag="h5" className="mt-5">
                          {user.name}
                        </MDBTypography>
                        {/* Reusable custom component NavigateButton for Edit profile */}
                        <NavigateButton
                          linkName="/me/update"
                          children
                          className={`btn ${style['color-btn-edit-prof']}`}
                          variant="btn-primary"
                          size="sm"
                        >
                          <span>Edit profile</span>
                        </NavigateButton>
                      </MDBCol>
                      {/* -------------------------*/}

                      {/* Right side of the User Profile card */}
                      <MDBCol md="8">
                        <MDBCardBody className="p-4">
                          {/* information section */}
                          <MDBTypography tag="h6">Information</MDBTypography>

                          <MDBRow size="6" className="mb-3">
                            {/* Button for Logout profile */}
                            <div className="mb-2">
                              <Button
                                onClick={handleLogout}
                                className={`btn ${style['color-btn']} ${style['bnt-shape']} position-absolute top-0 end-0 mt-3 me-3`}
                                variant="btn-primary"
                                size="btn-lg"
                              >
                                <span>
                                  <FontAwesomeIcon icon={faSignOut} />
                                </span>
                              </Button>
                            </div>
                          </MDBRow>

                          {/*----Main user information----*/}

                          {/* Horizontal line */}
                          <hr className="mt-0 mb-4" />
                          <section className="pt-1">
                            {/*User Full Name*/}
                            <MDBCol size="6" className="mb-5">
                              <MDBTypography tag="h6">Full Name:</MDBTypography>
                              <MDBCardText className="text-muted">
                                {user.name}
                              </MDBCardText>
                            </MDBCol>

                            {/* User Email */}
                            <MDBCol size="6" className="mb-5">
                              <MDBTypography tag="h6">Email</MDBTypography>
                              <MDBCardText className="text-muted">
                                {user.email}
                              </MDBCardText>
                            </MDBCol>

                            {/*User Joined On Date */}
                            <MDBCol size="6" className="mb-5">
                              <MDBTypography tag="h6">Joined On:</MDBTypography>
                              <MDBCardText className="text-muted">
                                {String(user.createdAt)}
                              </MDBCardText>
                            </MDBCol>
                          </section>
                          {/* -------------------------*/}

                          {/*----Change password Button and My favorites Button----*/}

                          {/* Horizontal line */}
                          <hr className="mt-0 mb-4" />
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              {/*  Reusable custom component NavigateButton for Change password */}
                              <NavigateButton
                                linkName="/password/update"
                                children
                                className={`btn ${style['color-btn']}`}
                                variant="btn-primary"
                                size="btn-lg"
                              >
                                <span>Change password</span>
                              </NavigateButton>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              {/*  Reusable custom component NavigateButton for My favorites */}
                              <NavigateButton
                                linkName="/favorites"
                                children
                                className={`btn ${style['color-btn']}`}
                                variant="btn-primary"
                                size="btn-lg"
                              >
                                <span>
                                  My favorites{' '}
                                  <FontAwesomeIcon icon={faHeart} />
                                </span>
                              </NavigateButton>
                            </MDBCol>
                          </MDBRow>
                          {/* -------------------------*/}
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </>
      )}
    </>
  );
};
export default Profile;
