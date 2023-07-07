import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style['footer-color']}>
      <Container fluid>
        <Row className={`${style.footer} align-items-center border-top`}>
          <Col xs="12" lg="6" className="footer-copyright">
            <span className={style['footer-copyright-text']}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </span>
          </Col>
          <Col xs="12" lg="6">
            <ul className={style['footer-links']}>
              <li className={style['footer-link']}>
                <Link to="/about">About</Link>
              </li>
              <li className={style['footer-link']}>
                <Link to="/team">Our Team</Link>
              </li>
              <li className={style['footer-link']}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={style['footer-link']}>
                <Link to="http://localhost:8000/api-docs/">API Documentation</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
