import React from 'react';
import './Contact.css';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
    <div className="background-container">
        <Card className="mb-2">
            <Card.Header className="contact-card-header">Contact Us</Card.Header>
            <Card.Body>
                <Card.Text>
                    We'd love to hear from you! If you have any questions, feedback, or
                    inquiries, please don't hesitate to get in touch with us. Our team is
                    here to assist you and provide the information you need.
                </Card.Text>
            </Card.Body>
            <ListGroup className="contact-group-list">
                <ListGroup.Item className="list-group-flush">
                    <FontAwesomeIcon
                        icon={faPhoneSquare}
                        style={{
                            color: '#f45c1a',
                            width: '2rem',
                            marginRight: '1rem',
                        }}
                        size="2xl"
                    />
                    111-25-45
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{
                            color: '#f45c1a',
                            width: '2rem',
                            marginRight: '1rem',
                        }}
                        size="2xl"
                    />{' '}
                    125 Main Street
                </ListGroup.Item>
                <ListGroup.Item>
                    <FontAwesomeIcon
                        icon={faEnvelopeCircleCheck}
                        style={{
                            color: '#f45c1a',
                            width: '2rem',
                            marginRight: '1rem',
                        }}
                        size="2xl"
                    />{' '}
                    petadopted@gmail.com
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
);

export default Contact;
