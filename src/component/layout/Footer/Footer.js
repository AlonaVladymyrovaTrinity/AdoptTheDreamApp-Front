import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row
          className={`${style.footer} ${style['align-items-center']} ${style['border-top']}`}
        >
          <Col xs="12" lg="6" className={style['footer-copyright']}>
            <span className={style['footer-copyright-text']}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </span>
          </Col>
          <Col xs="12" lg="6">
            <ul className={style['footer-links']}>
              <li className={style['footer-link']}>
                <a href="/about">About</a>
              </li>
              <li className={style['footer-link']}>
                <a href="/team">Our Team</a>
              </li>
              <li className={style['footer-link']}>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
