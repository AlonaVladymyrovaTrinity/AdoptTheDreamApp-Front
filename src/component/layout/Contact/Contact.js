import React from 'react';
import style from '../Contact/Contact.module.css';
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <div className={style['background-container']}>
    <Card className={style['contact-card']}>
      <Card.Header className={style['contact-card-header']}>
        Contact Us
      </Card.Header>
      <Card.Body>
        <Card.Text>
          We'd love to hear from you! If you have any questions, feedback, or
          inquiries, please don't hesitate to get in touch with us. Our team is
          here to assist you and provide the information you need.
        </Card.Text>
      </Card.Body>
      <ListGroup className={style['contact-group-list']}>
        <ListGroup.Item
          className={`${style['list-group-item']} list-group-flush`}
        >
          <FontAwesomeIcon
            icon={faPhoneSquare}
            style={{
              color: 'var(--color-btn)',
              width: '2rem',
              marginRight: '1rem',
            }}
            size="2xl"
          />
          111-25-45
        </ListGroup.Item>
        <ListGroup.Item
          className={`${style['list-group-item']} list-group-flush`}
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{
              color: 'var(--color-btn)',
              width: '2rem',
              marginRight: '1rem',
            }}
            size="2xl"
          />{' '}
          125 Main Street
        </ListGroup.Item>
        <ListGroup.Item
          className={`${style['list-group-item']} list-group-flush`}
        >
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            style={{
              color: 'var(--color-btn)',
              width: '2rem',
              marginRight: '1rem',
            }}
            size="2xl"
          />{' '}
          adoptthedream@gmail.com
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
);

export default Contact;
