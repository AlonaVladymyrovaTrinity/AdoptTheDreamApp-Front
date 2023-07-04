import React, { useState, useEffect, useReducer, useContext } from 'react';
import { initialState, userReducer } from '../../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../../actions/userAction';
import Alert from 'react-bootstrap/Alert';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TbSearch } from 'react-icons/tb';
import { TbCat } from 'react-icons/tb';
import { TbDog } from 'react-icons/tb';
import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/auth-context';
import { getSearchPetName } from '../../../actions/petAction';
import { SearchPetNameReducer } from '../../../reducers/petReducer';

const Header = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [logoutResponse, setLogoutResponse] = useState(false);
  const [search, setSearch] = useState('');
  const [statePetName, dispatchPetName] = useReducer(
    SearchPetNameReducer,
    initialState
  );

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
        setSuccessMessage();
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

  const petNameSearchResults = async (petName) => {
    try {
      await getSearchPetName(petName, dispatchPetName);
    } catch (error) {
      setErrorMessage('');
      setErrorMessage(error);
      return false;
    }
  };

  const HandleSearch = async (e) => {
    e.preventDefault();
    const searchInput = e.target.firstChild.value;
    setSearch(searchInput);
    try {
      await petNameSearchResults(searchInput);

      // setSearch('');
    } catch (error) {
      setErrorMessage(
        'An error occurred while searching. Sorry for the inconvenience. Please try again later.'
      );
    }
  };

  useEffect(() => {
    localStorage.setItem(
      'petNameResults',
      JSON.stringify(statePetName.petNameResponse)
    ); // Save to local storage
    window.postMessage({ key: 'petNameResults' }, window.location.origin);
  }, [statePetName.petNameResponse]);

  return (
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
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
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
          <Navbar.Brand className="mx-0" href="/">
            <div className={style.logo_wrapper}>
              <div className={style.logo}>
                <TbCat size="2rem" />
                <TbDog size="2rem" />
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
              <Nav.Link className={style.navLinkHeader} href="/process/donate">
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
              <Form
                className="d-flex width-150 align-items-center"
                onSubmit={HandleSearch}
              >
                <Form.Control
                  type="search"
                  placeholder="Search pet name"
                  aria-label="Search"
                  style={{
                    height: 33,
                    width: 190,
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
                  type="submit"
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
  );
};

export default Header;
