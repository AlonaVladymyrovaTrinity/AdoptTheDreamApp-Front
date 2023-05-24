import React from 'react';
import Card from 'react-bootstrap/Card';
import contactPage from '../../../images/contactPage.jpg';
import './Contact.css';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <div className="background-container">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <div style={{ marginLeft: '10%' }}>
                    <Card
                        text="black"
                        style={{ width: '30rem', height: '20rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Contact Us</Card.Header>
                        <Card.Body>
                            <Card.Title>Center-Left Card</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
