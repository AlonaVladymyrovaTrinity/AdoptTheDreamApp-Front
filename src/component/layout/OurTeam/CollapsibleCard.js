import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import style from '../OurTeam/OurTeam.module.css';

const CollapsibleCard = ({ name, role, image, description }) => {
  const MAX_DESCRIPTION_LENGTH = 150;
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldRenderReadMoreButton, setShouldRenderReadMoreButton] = useState(false);

  useEffect(() => {
    if (!description) {
      setShouldRenderReadMoreButton(false)
    } else if (description.length > MAX_DESCRIPTION_LENGTH) {
      setShouldRenderReadMoreButton(true)
    } else {
      setShouldRenderReadMoreButton(false)
    }
  }, [shouldRenderReadMoreButton, description])

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getFormattedDescription = () => {
    if (!description) return ""
    if (isExpanded) {
      return description;
    }
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description;
    }
    return description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
  };

  return (
    <Card className={`mb-4 ${style['custom-card']}`}>
      <div className={style['circle-img-wrapper']}>
        <Card.Img variant="top" src={image} alt={name} className={style['circle-img']} />
      </div>
      <Card.Body className={`${style['card-body']} ${isExpanded ? style['expanded'] : ''}`}>
        <Card.Title>
          {Array.isArray(name) ? (
            <ul>
              {name.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          ) : (
            name
          )}</Card.Title>
        <Card.Subtitle>{role}</Card.Subtitle>
        {
          description &&
          <Card.Text className={`${style['card-text']} ${isExpanded ? style['expanded'] : ''}`}>{getFormattedDescription()}</Card.Text>
        }
        {shouldRenderReadMoreButton &&
          <Button variant="link" onClick={handleToggle} className={style['custom-link-button']}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        }
      </Card.Body>
    </Card>
  );
};

export default CollapsibleCard;