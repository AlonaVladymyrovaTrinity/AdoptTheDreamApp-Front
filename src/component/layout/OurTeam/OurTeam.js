import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CollapsibleCard from './CollapsibleCard'

const OurTeam = () => {
  const team = [
    { name: 'Alona', role: 'Frontend Team', image: require('../../../images/Alona.jpeg'), description: 'Alona’s programming journey began in high school in Ukraine, igniting her passion for technology and its boundless possibilities. With a Master’s degree in Computer Science from Kyiv National University of Construction and Architecture, specializing in Automation and Information Technologies, she has a strong foundation in the field. With 7+ years of IT experience, she has mastered database development over 6 years and she also has 1.5+ years of expertise in creating visually appealing and user-friendly front-end interfaces. Alona arrived in the USA with legal status, maintaining it throughout her stay until receiving a green card. However, the lengthy and complex bureaucratic processes of obtaining a work permit resulted in a significant career gap. Willing to return into a career, she actively sought opportunities to bridge her knowledge gaps, particularly in modern technologies such as React. Code the Dream school provided her with that transformative opportunity, offering free access to learn the React alongside like-minded individuals. Alona is immensely grateful to Code the Dream for granting her this chance and engaging in a collaborative practicum project. She now eagerly seeks a front-end web developer position to contribute her expertise in HTML, CSS, JavaScript, and React to impactful projects.' },
    { name: 'Luba', role: 'Frontend Team', image: require('../../../images/Luba.jpeg'), description: 'Liubov moved to USA North Carolina in 2014. She holds two master’s degrees in Physics and in Finance and worked in the Finance field in Russia before moving to the US. After seven years as a stay-at-home mom, Liubov had a hard time navigating the workforce. After some research she decided to try herself in software development. And now Liubov is happy to be a part of Code the Dream family. She enjoys spending time with her children, as well as baking, knitting and painting.' },
    { name: 'Anna', role: 'Frontend Team', image: require('../../../images/Anna.jpg'), description: 'Anna is from Russia. She moved to the US in 2013 to North Carolina. She has a bachelor’s degree in finance from Russia and her previous work experience was in finance. Having moved to the USA, Anna devoted herself completely to caring for her family, since it was during this period that she became a mother for the first time. After some time, She started to study programming, and finished the bootcamp, where she mastered HTML, CSS and Java Script. Anna started looking at various educational resources and found Code The Dream. When she joined the CTD team, she realized that CTD offered everything she needed: structured learning materials, the perfect blend of theory and practice, and tremendous support from mentors and teammates. Every day Anna moves towards her dream of becoming a Software Developer. She has made learning an important part of her daily life and follows the concept of lifelong learning and growing mindset. Anna is a devoted wife and mother of two wonderful children. In addition, she enjoys boxing and loves to travel with her family.' },
    { name: 'Natasha', role: 'Backend Team', image: require('../../../images/Natasha.jpg'), description: 'Natasha is originally from Russia. She moved to the USA in 2018. First, she lived in Philadelphia, PA and then in 2020 she moved to Charlotte, NC where she obtained her heaven on Earth. She has a bachelor’s degree in financial management that he got in Russia and her prior work experience was related with finance field. After moving to the USA Natasha started to learn software testing, she graduated from a manual testing course and automation testing bootcamp and she realized that she is more interested in programming than in testing. She tried to learn programming by herself using different self-educating platforms, but she found that she needs a more systematic approach to her education. Natasha started to research different educational resources and found Code The Dream. When she joined CTD team, she realized that CTD offers everything that she needed: structured educational materials, perfect combination of theory and practice and huge support of mentors and teammates. Everyday Natasha is moving towards her dream to became Full Stack Software Developer. She had made the learning process a significant part of her everyday life and she follows life-long learning concept and growing mindset theory. Natasha is a dedicated wife and mother of three amazing kids and one adorable cat. Also, she is a fitness enthusiast and loves to read psychological books and articles in her very limited free time.' },
    { name: 'Vitalii', role: 'Backend Team', image: require('../../../images/Vitalii.jpg'), description: 'Vitalii is originally from Ukraine and moved to the United States in 2018. He obtained a master’s degree in material engineering from the National Technical University of Ukraine and a bachelor’s degree in finance from the International University of Finance (Ukraine).He has worked as a researcher, specializing in modeling the brittle fracture of steels. After that, he held positions as a financial analyst and financial manager in various companies. Currently, Vitalii has a part-time job at the local medical center and spends a lot of time studying computer science. He is enrolled in the Mate Academy coding bootcamp, where he has gained proficiency in HTML, CSS, and JavaScript. He has joined CTD to further his knowledge of Node.js and React.js. In his free time, Vitalii enjoys spending time with his two kids, swimming, fishing, and downhill skiing.' },
    { name: ['Oksana Stepanchuk', 'Tim Almacen', 'Munir Nuristani'], role: 'Our team mentors', image: require('../../../images/CTD.png') },
  ];

  return (
    <Container>
      <h1>Our Team</h1>
      <Row>
        {team.map((member, index) => (
          <Col key={index} md={4} sm={6}>
            <CollapsibleCard
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;