import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="text-white text-center p-5" style={{backgroundColor: '#47a380', minHeight: '95vh', position: 'relative'}}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body className="p-5">
              <Card.Title className="text-center mb-4">About Me</Card.Title>
              <Card.Text>
              <p>A proud student of Pamantasan ng Cabuyao; taking the course of Bachelor of Science in Computer Science.</p>
              </Card.Text>
              <Card.Text>
                When I’m not working, you’ll find me enjoying reading books or playing popular games such as Mobile Legends and Minecraft.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
