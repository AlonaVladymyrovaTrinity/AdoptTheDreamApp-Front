import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TbSearch } from 'react-icons/tb';
import { TbCat } from 'react-icons/tb';
import { TbDog } from 'react-icons/tb';
import style from './Header.module.css';

const Header = () => {
  return (
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
            <Form className="d-flex width-150 align-items-center">
              <Form.Control
                type="text"
                // placeholder="Search"
                // className="me-2"
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
                style={{
                  border: 2,
                  cursor: 'pointer',
                  textAlign: 'center',
                  borderRadius: 50,
                  backgroundColor: 'var(--color-btn)',
                  position: 'relative',
                  right: 31,
                  paddingTop: 1,
                  paddingBottom: 4,
                  paddingInline: 5,
                }}
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
          <Nav>
            <Nav.Link className={style.navLinkLogInHeader} href="/login">
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
