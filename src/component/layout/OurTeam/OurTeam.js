import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import style from '../OurTeam/OurTeam.module.css'

  // Sample team data
  const team = [
    { name: 'Alona', role: 'Frontend Team', image: require('../../../images/Alona.jpeg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque quis turpis scelerisque congue. Donec dictum nulla in massa fermentum, at accumsan odio tempus. Nulla mattis fringilla tempus. Nunc interdum massa fermentum urna suscipit tempor. Donec nulla risus, feugiat porttitor convallis vel, bibendum vel odio. Maecenas rhoncus rutrum felis, eu consectetur quam feugiat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo quam justo, a sodales nibh vehicula in. Aenean consequat vel urna eget pretium. Integer varius eleifend tortor, et commodo tellus mattis sit amet. Pellentesque in pharetra orci. Praesent vestibulum vulputate magna, quis lacinia erat condimentum ac. Morbi bibendum enim maximus imperdiet elementum. Nullam ultricies faucibus ex, vel semper orci ullamcorper vel. Fusce imperdiet magna ut enim venenatis placerat.'},
    { name: 'Luba', role: 'Frontend Team', image: require('../../../images/Luba.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque quis turpis scelerisque congue. Donec dictum nulla in massa fermentum, at accumsan odio tempus. Nulla mattis fringilla tempus. Nunc interdum massa fermentum urna suscipit tempor. Donec nulla risus, feugiat porttitor convallis vel, bibendum vel odio. Maecenas rhoncus rutrum felis, eu consectetur quam feugiat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo quam justo, a sodales nibh vehicula in. Aenean consequat vel urna eget pretium. Integer varius eleifend tortor, et commodo tellus mattis sit amet. Pellentesque in pharetra orci. Praesent vestibulum vulputate magna, quis lacinia erat condimentum ac. Morbi bibendum enim maximus imperdiet elementum. Nullam ultricies faucibus ex, vel semper orci ullamcorper vel. Fusce imperdiet magna ut enim venenatis placerat.'},
    { name: 'Anna', role: 'Frontend Team', image: require('../../../images/Annapng.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque quis turpis scelerisque congue. Donec dictum nulla in massa fermentum, at accumsan odio tempus. Nulla mattis fringilla tempus. Nunc interdum massa fermentum urna suscipit tempor. Donec nulla risus, feugiat porttitor convallis vel, bibendum vel odio. Maecenas rhoncus rutrum felis, eu consectetur quam feugiat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo quam justo, a sodales nibh vehicula in. Aenean consequat vel urna eget pretium. Integer varius eleifend tortor, et commodo tellus mattis sit amet. Pellentesque in pharetra orci. Praesent vestibulum vulputate magna, quis lacinia erat condimentum ac. Morbi bibendum enim maximus imperdiet elementum. Nullam ultricies faucibus ex, vel semper orci ullamcorper vel. Fusce imperdiet magna ut enim venenatis placerat.'},
    { name: 'Natasha', role: 'Backend Team', image: require('../../../images/Natasha.jpeg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque quis turpis scelerisque congue. Donec dictum nulla in massa fermentum, at accumsan odio tempus. Nulla mattis fringilla tempus. Nunc interdum massa fermentum urna suscipit tempor. Donec nulla risus, feugiat porttitor convallis vel, bibendum vel odio. Maecenas rhoncus rutrum felis, eu consectetur quam feugiat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo quam justo, a sodales nibh vehicula in. Aenean consequat vel urna eget pretium. Integer varius eleifend tortor, et commodo tellus mattis sit amet. Pellentesque in pharetra orci. Praesent vestibulum vulputate magna, quis lacinia erat condimentum ac. Morbi bibendum enim maximus imperdiet elementum. Nullam ultricies faucibus ex, vel semper orci ullamcorper vel. Fusce imperdiet magna ut enim venenatis placerat.'},
    { name: 'Vitaly', role: 'Backend Team', image: require('../../../images/Vitaly.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque quis turpis scelerisque congue. Donec dictum nulla in massa fermentum, at accumsan odio tempus. Nulla mattis fringilla tempus. Nunc interdum massa fermentum urna suscipit tempor. Donec nulla risus, feugiat porttitor convallis vel, bibendum vel odio. Maecenas rhoncus rutrum felis, eu consectetur quam feugiat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo quam justo, a sodales nibh vehicula in. Aenean consequat vel urna eget pretium. Integer varius eleifend tortor, et commodo tellus mattis sit amet. Pellentesque in pharetra orci. Praesent vestibulum vulputate magna, quis lacinia erat condimentum ac. Morbi bibendum enim maximus imperdiet elementum. Nullam ultricies faucibus ex, vel semper orci ullamcorper vel. Fusce imperdiet magna ut enim venenatis placerat.'},
  ];

const OurTeam = () => {

  
  return (
    <Container>
      <h1>Our Team</h1>
      <Row>
        {team.map((member, index) => (
          <Col key={index} md={4} sm={6}>
            <Card className="mb-4">
            <div className="circle-img-wrapper">
              <Card.Img variant="top" src={member.image} alt={member.name} className={style['circle-img']} />
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle>{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;
