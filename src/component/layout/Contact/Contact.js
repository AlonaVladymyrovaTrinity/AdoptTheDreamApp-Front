import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row>
        <Col className="d-flex justify-content-center">
        <Card text="black" style={{ width: '20rem' }} className="mb-2">
            <Card.Header>Contact</Card.Header>
            <Card.Body>
                <Card.Title>Center-Left Card</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    );
};

export default Contact;
