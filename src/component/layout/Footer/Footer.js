import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="footer align-items-center border-top">
                    <Col xs="12" lg="6" className="footer-copyright">
                        <span className="footer-copyright-text">
                            &copy; {new Date().getFullYear()} All Rights Reserved
                        </span>
                    </Col>
                    <Col xs="12" lg="6">
                        <ul className="footer-links">
                            <li className="footer-link">
                                <a href="/about">About</a>
                            </li>
                            <li className="footer-link">
                                <a href="/team">Our Team</a>
                            </li>
                            <li className="footer-link">
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
