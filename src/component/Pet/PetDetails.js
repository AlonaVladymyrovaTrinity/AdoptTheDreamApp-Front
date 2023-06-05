import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import style from './PetDetails.module.css';
const data = {
  id: 1233356,
  breed: 'Siamesse',
  images: [
    {
      image: require('../../images/pexels-evg-kowalievska-1170986.jpg'),
      caption: 'Caption1',
      description: 'Description Here',
    },
    {
      image: require('../../images/pexels-mustafa-ezz-691583.jpg'),
      caption: 'Caption2',
      description: 'Description Here',
    },
    {
      image: require('../../images/pexels-xue-guangjian-1687831.jpg'),
      caption: 'Caption3',
      description: 'Description Here',
    },
  ],
};

const PetDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [index, setIndex] = useState(0);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row>
      <Col
        sm={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <div style={{ maxWidth: '75%', margin: '4rem' }}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {data.images.map((image, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="img-fluid w-100"
                    src={image.image}
                    alt="Animal 1"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex flex-column align-items-start justify-content-start align-items-md-end"
        style={{ marginRight: 'auto', marginTop: '4rem' }}
      >
        <div className={style['frame']}>
          <h1 className={style['sr-only']}>Animal Details</h1>
          <p>Name: Whiskers</p>
          <p>ID: {data.id}</p>
          <p>{data.breed}</p>
          <p>Type: Cat</p>
          <p>Age: 2 years</p>
          <p>Size: Medium</p>
          <p>Gender: Female</p>
          <p>Good with: Dogs, Children</p>
          <p>Coat Length: Short</p>
          <p>Color: Tabby</p>
          <p>Care & Behavior: Friendly, Playful</p>
          <p>
            "Meet Whiskers, the adorable feline who has found her forever home!
            Whiskers, a beautiful tabby cat with mesmerizing green eyes, was
            once a stray wandering the streets until she was rescued and brought
            to our shelter. Whiskers captured the hearts of our staff and
            volunteers with her playful personality and affectionate nature.
            After spending some time in our care, Whiskers finally found her
            perfect match—a loving and caring family who instantly fell in love
            with her charm. Since being adopted, Whiskers has settled into her
            new home seamlessly. She spends her days exploring every nook and
            cranny, chasing her favorite toys, and cuddling up with her new
            family members. Whiskers brings joy and laughter to everyone she
            encounters, and her presence has truly enriched the lives of her
            adoptive family. We couldn't be happier to see Whiskers thriving in
            her new environment. Her journey from a homeless cat to a beloved
            family member is a testament to the power of adoption and the
            incredible bond that can be formed between humans and animals. If
            you're considering adding a furry companion to your family, we
            encourage you to visit our shelter and explore the wonderful cats
            and kittens waiting for their forever homes. Every adoption story is
            unique, and there's a special cat out there just waiting to steal
            your heart, just like Whiskers did with her lucky family."
          </p>
          <Button
            className={isFavorite ? `${style.favoriteButton} ${style.favorite}` : style.favoriteButton}
            onClick={handleAddToFavorites}
          >
            {isFavorite ? (
              <>
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                Added to Favorites
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                Add to Favorites
              </>
            )}
          </Button>
        </div>
        </Col>
    </Row>
  );
};

export default PetDetails;
