import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-white text-center p-5" style={{backgroundColor: '#47a380', minHeight: '95vh', position: 'relative'}}>
      <Row className="align-items-center">
        <Col>
          <h1 className="display-4">Welcome to My Profile</h1>
          <p className="lead mb-4">I’m John Arvin Jarquio, a 3rd-year student at Pamantasan ng Cabuyao, aspiring to build houses inspired by my uncles' impactful work. With skills in 3D structure and floor plan design, I aim to create functional and visually appealing homes that benefit the community.</p>
          <p className="lead mb-4">To achieve this, I will continue developing my technical skills and gaining hands-on experience in construction and project management. My goal is to establish a successful career that allows me to support my family comfortably after retiring at 50, leaving a lasting legacy through my work.</p>

        </Col>
        {/* <p className="lead mt-4" 
        style={{transform:'translateY(2000%)',
          position: 'center',
          bottom: 50,
          right: '35%'

        }}>

          Do you have a concern? Feel free to contact me!</p> */}
      </Row>
      {/* <Button 
        style={{ 
          position: 'absolute', 
          bottom: 20, 
          left: '50%', 
          transform: 'translateX(-50%)' 
        }} 
        variant="dark" 
        size="lg" 
        href="/contact"
      >
        Contact Me
      </Button> */}
    </Container>
  );
};

export default Home;