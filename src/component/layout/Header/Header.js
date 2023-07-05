import React, { useState, useEffect, useReducer, useContext } from 'react';
import { initialState, userReducer } from '../../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../../actions/userAction';
import Logo from '../../../images/Logo.png'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TbSearch } from 'react-icons/tb';
import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/auth-context';

const Header = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [logoutResponse, setLogoutResponse] = useState(false);
  const navigate = useNavigate();
  const { userName } = useContext(AuthContext);

  const { logout, dispatch: dispatchLogout } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadUser(dispatch);
      } catch (error) {
        setErrorMessage('Error loading user');
      }
    };
    fetchData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await logout(dispatchLogout);
    } catch (error) {
      setErrorMessage('Error logging out');
    }
    if (logoutResponse === true) {
      setSuccessMessage('User successfully signed out!');
      setTimeout(() => {
        navigate('/login');
        setSuccessMessage('');
      }, 1000);
    } else {
      setErrorMessage('Logout unsuccessful. Try again');
    }
  };
  useEffect(() => {
    if (state.isAuthenticated === false) {
      setLogoutResponse(true);
    }
  }, [state.isAuthenticated]);

  return (
    <>
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
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ minHeight: 80 }}
        >
          <Container fluid>
            <Navbar.Brand className="mx-0" href="/" >
              <div className="d-flex justify-content-center align-items-center">
                <div className={style['logo_wrapper']}>
                  <div className={style['logo']}>
                    <img src={Logo} alt="Logo" />
                  </div>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto gap-5">
                <Nav.Link className={style.navLinkHeader} href="/">
                  Home
                </Nav.Link>
                <Nav.Link className={style.navLinkHeader} href="/pets">
                  Pets
                </Nav.Link>
                <Nav.Link className={style.navLinkHeader} href="/donate">
                  Donate
                </Nav.Link>
                <Nav.Link className={style.navLinkHeader} href="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link className={style.navLinkHeader} href="/about">
                  About
                </Nav.Link>
              </Nav>
              <div className={style.searchHeader}>
                <Form className="d-flex width-150 align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      height: 33,
                      width: 170,
                      border: 0,
                      borderRadius: 18,
                      position: 'relative',
                    }}
                  />
                  <Button
                    className={style.searchButton}
                    variant="outline-default"
                    aria-label="Search button"
                    title="Search"
                    onClick={() => {
                      alert('search');
                    }}
                  >
                    <TbSearch
                      size="1.2rem"
                      className="mb-0.6 color-var(--color-black)"
                    />
                  </Button>
                </Form>
              </div>
              {userName ? (
                <Nav>
                  <Nav.Link
                    href="/favorites"
                    className={style.navLinkHeader}
                    title="Favorites"
                    aria-label="Favorites"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="sr-only">Favorites</span>
                  </Nav.Link>
                  <Nav.Link
                    href="/account"
                    title={`${userName}'s profile`}
                    aria-label={`${userName}'s profile`}
                    className={style.navLinkHeader}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span className="sr-only">User profile</span>
                  </Nav.Link>
                  <Nav.Link
                    className={style.navLinkLogOutHeader}
                    href="/login"
                    title="Logout"
                    aria-label={`Logout`}
                    onClick={handleLogout}
                  >
                    LogOut
                  </Nav.Link>
                </Nav>
              ) : null}
              {!userName ? (
                <Nav>
                  <Nav.Link
                    className={style.navLinkLogInHeader}
                    href="/login"
                    title="Login"
                    aria-label={`Login`}
                  >
                    LogIn
                  </Nav.Link>
                </Nav>
              ) : null}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Header;
